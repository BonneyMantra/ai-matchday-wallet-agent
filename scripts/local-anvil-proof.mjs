import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { createPublicClient, createWalletClient, http, keccak256, stringToHex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { execFileSync } from "node:child_process";
import fixtures from "../data/fixtures.json" with { type: "json" };
import { numberToPick, pickToNumber, writeJson } from "./shared.mjs";

const rpcUrl = "http://127.0.0.1:8545";
const ownerKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const agentKey = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
const owner = privateKeyToAccount(ownerKey);
const agent = privateKeyToAccount(agentKey);

execFileSync("forge", ["build"], { stdio: "inherit" });

const anvil = spawn("anvil", ["--silent", "--port", "8545"], {
  stdio: "ignore",
  detached: true,
});

async function waitForRpc(client) {
  for (let i = 0; i < 40; i += 1) {
    try {
      await client.getBlockNumber();
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  throw new Error("anvil RPC did not become ready");
}

try {
  const chain = {
    id: 31337,
    name: "Anvil",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: { default: { http: [rpcUrl] } },
  };
  const publicClient = createPublicClient({ chain, transport: http(rpcUrl) });
  const ownerClient = createWalletClient({ account: owner, chain, transport: http(rpcUrl) });
  const agentClient = createWalletClient({ account: agent, chain, transport: http(rpcUrl) });

  await waitForRpc(publicClient);

  const artifact = JSON.parse(
    readFileSync("out/MatchdayAgentWallet.sol/MatchdayAgentWallet.json", "utf8"),
  );
  const hash = await ownerClient.deployContract({
    abi: artifact.abi,
    bytecode: artifact.bytecode.object,
    args: [owner.address],
  });
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  const contractAddress = receipt.contractAddress;
  const fixture = fixtures[0];
  const matchId = keccak256(stringToHex(fixture.matchIdLabel));
  const predictionPick = pickToNumber("home");
  const submitTx = await agentClient.writeContract({
    address: contractAddress,
    abi: artifact.abi,
    functionName: "submitPrediction",
    args: [matchId, predictionPick, "Fixture heuristic: home momentum edge"],
  });
  await publicClient.waitForTransactionReceipt({ hash: submitTx });

  const resolveTx = await ownerClient.writeContract({
    address: contractAddress,
    abi: artifact.abi,
    functionName: "resolveMatch",
    args: [matchId, pickToNumber(fixture.demoResult), "fixture-demo-result"],
  });
  await publicClient.waitForTransactionReceipt({ hash: resolveTx });

  const scoreTx = await ownerClient.writeContract({
    address: contractAddress,
    abi: artifact.abi,
    functionName: "scoreAgent",
    args: [agent.address, matchId],
  });
  await publicClient.waitForTransactionReceipt({ hash: scoreTx });

  const stats = await publicClient.readContract({
    address: contractAddress,
    abi: artifact.abi,
    functionName: "agentStats",
    args: [agent.address],
  });

  const proof = {
    generatedAt: new Date().toISOString(),
    status: "passed",
    chain: "anvil-local",
    fixturePolicy: "Seeded demo fixture; not live sports data.",
    contractAddress,
    owner: owner.address,
    agent: agent.address,
    matchId,
    predicted: numberToPick(predictionPick),
    demoResult: fixture.demoResult,
    transactions: { deploy: hash, submit: submitTx, resolve: resolveTx, score: scoreTx },
    stats: {
      submitted: stats[0].toString(),
      settled: stats[1].toString(),
      correct: stats[2].toString(),
    },
  };

  writeJson("proofs/local-anvil-proof.json", proof);
  writeJson("public/proofs/local-anvil-proof.json", proof);
  console.info(`Local signed proof passed: ${submitTx}`);
} finally {
  try {
    process.kill(-anvil.pid);
  } catch {
    anvil.kill();
  }
}
