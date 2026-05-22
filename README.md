# Matchday Wallet Agent

World Cup-themed X Layer X Cup Hackathon 2026 project.

Matchday Wallet Agent is a software agent with an EVM wallet. It chooses a non-cash match prediction, signs a `submitPrediction` transaction, and keeps an accuracy row tied to the agent address.

## Current Truth

- Real: Solidity contract, Foundry tests, local/anvil wallet-signed proof, X Layer testnet RPC smoke.
- Ready but blocked: X Layer testnet deployment and live agent prediction transaction.
- Blocker: no funded X Layer deployer/private key or approved wallet path has been provided.
- Fixture/demo: match data and settlement result are seeded fixture data, not live sports data.
- Not claimed: real-money betting, live sports oracle, autonomous X posting, final submission.

## Demo

```bash
npm install
forge install foundry-rs/forge-std
npm run check
npm run dev
```

Open the local Vite URL printed by `npm run dev`.

## Proof Commands

```bash
npm run test:contracts
npm run rpc:smoke
npm run agent:pick
npm run anvil:proof
npm run build
```

Generated proof files:

- `proofs/xlayer-rpc-smoke.json`
- `proofs/agent-decision.json`
- `proofs/local-anvil-proof.json`

## X Layer Deployment Path

Copy `.env.example` to `.env` through your approved secret workflow and set:

```bash
XLAYER_RPC_URL=https://testrpc.xlayer.tech/terigon
DEPLOYER_PRIVATE_KEY=<funded signer, never commit>
AGENT_PRIVATE_KEY=<funded agent signer, never commit>
XLAYER_CONTRACT_ADDRESS=<deployed contract>
```

Then:

```bash
npm run deploy:xlayer
npm run agent:submit:xlayer
```

Those commands write explorer-ready proof JSON only when the funded signer path exists.

## UI Direction

The UI borrows from Gabriel's template catalog:

- Orbis NFT: dark liquid-glass proof panels and cinematic collectible framing.
- Sentinel AI: dark agent hero, bright signal accent, compact proof language.

## Safety

This is a non-cash points/proof demo. It intentionally avoids wager wording, custody claims, and live sports-data claims.
