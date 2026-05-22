# Deployments

## Local / Anvil

- Status: passed.
- Proof file: `proofs/local-anvil-proof.json`.
- Latest local contract address is regenerated per run.
- Latest local transaction hashes are regenerated per run.

## X Layer Testnet

- Status: blocked for write/deploy.
- RPC smoke: passed, chain ID `1952` / `0x7a0`.
- Proof file: `proofs/xlayer-rpc-smoke.json`.
- Required env: `DEPLOYER_PRIVATE_KEY`.
- Blocker: no funded X Layer deployer/private key or approved wallet path available in this run.

## X Layer Mainnet

- Status: not attempted.
- Reason: hackathon demo should prove testnet first; no funded signer provided.
