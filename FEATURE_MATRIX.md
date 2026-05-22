# Feature Matrix

Hackathon: X Layer X Cup Hackathon 2026
Idea: AI Matchday Wallet Agent

| Feature / claim | Source evidence | Implementation path | Test / proof | Status | Gap / blocker |
|---|---|---|---|---|---|
| Agent wallet submits prediction | Council TOP_10 rank 2 and EXECUTION_QUEUE proof gate: one transaction signed by agent wallet. | `contracts/MatchdayAgentWallet.sol`, `scripts/local-anvil-proof.mjs`, `scripts/agent-submit-xlayer.mjs` | `forge test`; `npm run anvil:proof`; optional `npm run agent:submit:xlayer` | tested | X Layer live tx requires funded signer. Local submit tx: `0x1a1c0cb67a4740bd1b61995f87fc67c77693daf5338206110f9d283a15906ae2`. |
| Accuracy row tied to agent address | Council rank 2 proof gate. | contract `agentStats`; UI proof panel. | `forge test`; `npm run anvil:proof`; browser screenshots. | tested | Local proof shows submitted `1`, settled `1`, correct `1`. |
| Fixture/demo match settlement | Council permits mocked resolver settlement with clear risk controls. | owner-only `resolveMatch`; `data/fixtures.json`. | `forge test`; `npm run anvil:proof`. | tested | Labeled fixture/demo data in UI and docs. |
| X Layer RPC compatibility | Official docs and execution contract. | `scripts/xlayer-rpc-smoke.mjs`; `foundry.toml` RPC alias. | `npm run rpc:smoke`. | tested | Read-only smoke passed; live write blocked by signer. |
| Share artifact template | Official requirement for X account/tagging; no autonomous post without approval. | UI copy block; `EXECUTION_PACKET.md`. | Browser proof; no posting. | partial | Needs project X handle and approved post content. |
| Public repo | Execution contract requires Bonney-owned public repo. | `REPO_PLAN.md`; local git remote. | Browser proof `outputs/screenshots/github-repo-bonney.png`. | partial | Repo exists; push credential path still must be verified. |
| Submission prep | Execution contract requires portal preflight. | `SUBMISSION_PORTAL_PLAN.md`. | `agent-browser` preflight session. | tested | Disabled form fields; missing final assets; no final submit. |

Statuses: planned, implemented, tested, blocked, removed.
