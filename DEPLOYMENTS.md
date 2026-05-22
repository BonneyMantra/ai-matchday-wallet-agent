# Deployments

## X Layer Testnet (chain 1952)

**Deployed:** 2026-05-22T08:44Z
**Deployer:** `0x7ED243CfBC50167cae1660a63e2aE9618cf3952c` (Bonney persona)
**Agent wallet:** `0x32312a4c4544E21682a1b8A4bcD30B5866c29d15` (the AI matchday agent's signing address; separate from deployer)

| Contract | Address | Tx |
|---|---|---|
| MatchdayAgentWallet | [`0xa69704c14eb8c598a9674759a1be541e88ed9de7`](https://www.okx.com/web3/explorer/xlayer-test/address/0xa69704c14eb8c598a9674759a1be541e88ed9de7) | [`0xad28dde...`](https://www.okx.com/web3/explorer/xlayer-test/tx/0xad28dde788016167f715ff703f8ef6019deb808db9941f4cf98d58aba21e9487) |

## RPC

- `https://testrpc.xlayer.tech/terigon`
- Chain ID: 1952

## Proof artifacts

- `proofs/xlayer-deployment.json`
- `public/proofs/xlayer-deployment.json`

## Notes

The AI agent submits predictions from its own `AGENT_PRIVATE_KEY` (address `0x32312a4c4544E21682a1b8A4bcD30B5866c29d15`). That wallet is NOT funded yet — submit-tx flow requires Gabriel to send a small amount of OKB to the agent address from the deployer, or fund the agent address directly from the faucet, before running `pnpm agent:submit:xlayer`.
