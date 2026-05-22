import { readFileSync } from "node:fs";
import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { xlayerTestnet, writeJson } from "./shared.mjs";

if (!process.env.DEPLOYER_PRIVATE_KEY) {
  throw new Error("DEPLOYER_PRIVATE_KEY is required for X Layer deployment.");
}

const artifact = JSON.parse(
  readFileSync("out/MatchdayAgentWallet.sol/MatchdayAgentWallet.json", "utf8"),
);
const account = privateKeyToAccount(process.env.DEPLOYER_PRIVATE_KEY);
const publicClient = createPublicClient({
  chain: xlayerTestnet,
  transport: http(xlayerTestnet.rpcUrls.default.http[0]),
});
const walletClient = createWalletClient({
  account,
  chain: xlayerTestnet,
  transport: http(xlayerTestnet.rpcUrls.default.http[0]),
});

const hash = await walletClient.deployContract({
  abi: artifact.abi,
  bytecode: artifact.bytecode.object,
  args: [account.address],
});
const receipt = await publicClient.waitForTransactionReceipt({ hash });
const proof = {
  generatedAt: new Date().toISOString(),
  status: "deployed",
  chain: "xlayer-testnet",
  deployer: account.address,
  contractAddress: receipt.contractAddress,
  txHash: hash,
  explorer: `https://www.okx.com/web3/explorer/xlayer-test/tx/${hash}`,
};

writeJson("proofs/xlayer-deployment.json", proof);
writeJson("public/proofs/xlayer-deployment.json", proof);
console.info(`X Layer deployment tx: ${hash}`);
