import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const xlayerTestnet = {
  id: 1952,
  name: "X Layer Testnet",
  nativeCurrency: { name: "OKB", symbol: "OKB", decimals: 18 },
  rpcUrls: {
    default: { http: [process.env.XLAYER_RPC_URL || "https://testrpc.xlayer.tech/terigon"] },
  },
  blockExplorers: {
    default: { name: "OKX Explorer", url: "https://www.okx.com/web3/explorer/xlayer-test" },
  },
};

export function writeJson(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

export function pickToNumber(pick) {
  if (pick === "home") return 0;
  if (pick === "draw") return 1;
  if (pick === "away") return 2;
  throw new Error(`Unsupported pick: ${pick}`);
}

export function numberToPick(value) {
  return ["home", "draw", "away"][Number(value)] || "unknown";
}
