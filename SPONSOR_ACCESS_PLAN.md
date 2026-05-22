# Sponsor Access Plan

## Official Surfaces

| Surface | URL | Purpose | Access plan | Status |
|---|---|---|---|---|
| X Cup hackathon page | `https://web3.okx.com/xlayer/build-x-hackathon/xcup` | Rules, requirements, submission link. | Public web verified. | done |
| Submission form | `https://docs.google.com/forms/d/e/1FAIpQLSdj19ZO-gQwLKEz36Z2XDLL7eTdSr-PRXcDmy4p6G2GFvrWKw/viewform?usp=dialog` | Final project submission. | Bonney profile opened with `agent-browser`; do not final submit without Gabriel approval. | preflighted |
| X Layer network docs | `https://web3.okx.com/xlayer/docs/developer/build-on-xlayer/network-information` | Chain IDs, RPC URLs, explorer URLs. | Public docs verified. | done |
| X Layer RPC docs | `https://web3.okx.com/xlayer/docs/developer/rpc-endpoints/rpc-endpoints` | JSON-RPC methods and rate limits. | Public docs verified; testnet RPC smoke passed. | done |
| X Layer explorer | `https://www.okx.com/web3/explorer/xlayer-test` | Transaction/explorer proof after real deployment. | Requires real funded signer and tx hash. | blocked |
| X Layer faucet | `https://web3.okx.com/xlayer/build-x-hackathon/xcup` navigation includes Testnet faucet. | Fund testnet wallet if available. | Browser self-service not attempted yet because no deployer wallet path/private key is available. | blocked |

## Real State Transition

The demo must prove this state transition:

1. A software agent chooses a World Cup fixture prediction from explicit match data.
2. An EVM wallet signs a transaction to `submitPrediction`.
3. The contract records `agent address -> match id -> pick`.
4. A resolver settles the fixture with labeled fixture/demo result data.
5. The contract updates the agent accuracy row from on-chain events/state.

## Funding / Key Policy

- No private key may be committed, echoed, or written into docs.
- `DEPLOYER_PRIVATE_KEY` and optional `AGENT_PRIVATE_KEY` are read only from environment variables.
- If no funded signer exists, run `anvil` proof and X Layer read-only RPC smoke, then record the exact blocker.

## Blocker Gabriel Must Clear For Live X Layer Tx

Provide one of:

- a funded X Layer testnet private key through an approved secure path, or
- an approved OKX/agentic wallet path that can deploy/call the contract, or
- explicit authorization to use an existing funded profile wallet and browser wallet flow.
