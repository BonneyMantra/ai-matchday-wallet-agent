import { createPublicClient, http } from "viem";
import { xlayerTestnet, writeJson } from "./shared.mjs";

const client = createPublicClient({
  chain: xlayerTestnet,
  transport: http(xlayerTestnet.rpcUrls.default.http[0]),
});

const [chainId, blockNumber] = await Promise.all([client.getChainId(), client.getBlockNumber()]);

const proof = {
  generatedAt: new Date().toISOString(),
  network: "X Layer Testnet",
  rpcUrl: xlayerTestnet.rpcUrls.default.http[0],
  expectedChainId: 1952,
  observedChainId: chainId,
  observedChainIdHex: `0x${chainId.toString(16)}`,
  blockNumber: blockNumber.toString(),
  status: chainId === 1952 ? "passed" : "failed",
};

writeJson("proofs/xlayer-rpc-smoke.json", proof);
writeJson("public/proofs/xlayer-rpc-smoke.json", proof);

if (proof.status !== "passed") {
  throw new Error(`Unexpected X Layer chain id: ${chainId}`);
}

console.info(`X Layer RPC smoke passed: chain ${chainId}, block ${blockNumber}`);
