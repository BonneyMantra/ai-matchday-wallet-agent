import { readFileSync } from "node:fs";
import { createPublicClient, createWalletClient, http, keccak256, stringToHex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import fixtures from "../data/fixtures.json" with { type: "json" };
import { pickToNumber, writeJson, xlayerTestnet } from "./shared.mjs";

if (!process.env.AGENT_PRIVATE_KEY || !process.env.XLAYER_CONTRACT_ADDRESS) {
  throw new Error("AGENT_PRIVATE_KEY and XLAYER_CONTRACT_ADDRESS are required.");
}

const artifact = JSON.parse(
  readFileSync("out/MatchdayAgentWallet.sol/MatchdayAgentWallet.json", "utf8"),
);
const agent = privateKeyToAccount(process.env.AGENT_PRIVATE_KEY);
const publicClient = createPublicClient({
  chain: xlayerTestnet,
  transport: http(xlayerTestnet.rpcUrls.default.http[0]),
});
const walletClient = createWalletClient({
  account: agent,
  chain: xlayerTestnet,
  transport: http(xlayerTestnet.rpcUrls.default.http[0]),
});
const fixture = fixtures[0];
const matchId = keccak256(stringToHex(fixture.matchIdLabel));
const hash = await walletClient.writeContract({
  address: process.env.XLAYER_CONTRACT_ADDRESS,
  abi: artifact.abi,
  functionName: "submitPrediction",
  args: [matchId, pickToNumber("home"), "Agent submitted this pick from approved funded signer."],
});
await publicClient.waitForTransactionReceipt({ hash });

const proof = {
  generatedAt: new Date().toISOString(),
  status: "submitted",
  chain: "xlayer-testnet",
  contractAddress: process.env.XLAYER_CONTRACT_ADDRESS,
  agent: agent.address,
  txHash: hash,
  explorer: `https://www.okx.com/web3/explorer/xlayer-test/tx/${hash}`,
};

writeJson("proofs/xlayer-agent-submit.json", proof);
writeJson("public/proofs/xlayer-agent-submit.json", proof);
console.info(`X Layer agent prediction tx: ${hash}`);
