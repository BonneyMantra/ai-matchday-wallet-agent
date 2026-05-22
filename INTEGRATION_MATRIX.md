# Integration Matrix

Hackathon: X Layer X Cup Hackathon 2026
Idea: AI Matchday Wallet Agent

| Dependency | Real access path | Env / credential | Proof command or browser proof | Fixture policy | Status | Blocker |
|---|---|---|---|---|---|---|
| X Layer testnet RPC | Public docs: `https://testrpc.xlayer.tech/terigon`, chain ID 1952. | none | `npm run rpc:smoke` | No fixture; real read-only RPC. | tested | None for reads. |
| X Layer live contract deploy/write | Public RPC plus funded deployer. | `DEPLOYER_PRIVATE_KEY`; optional `XLAYER_RPC_URL` | `npm run deploy:xlayer`; explorer link | No fixture may replace live tx; local/anvil proof is separate and labeled. | blocked | Need funded X Layer signer/private key or approved wallet path. |
| Agent wallet | Env key for real deploy; generated local anvil wallet for test proof. | `AGENT_PRIVATE_KEY` optional | `npm run anvil:proof`; optional `npm run agent:submit:xlayer` | Generated key is local proof only. | tested | Funded real agent key missing. |
| Sports fixture data | Seeded World Cup-style fixture JSON. | none | Unit/local proof references `sourceLabel`. | Must be labeled fixture/demo in UI and docs. | tested | Live sports API not required for MVP; no live oracle claim. |
| AI/model decision | Optional OpenAI-compatible adapter; heuristic fallback. | `OPENAI_API_KEY` optional | `npm run agent:pick` writes decision mode. | Heuristic mode is labeled `fixture-heuristic`. | tested | No model key confirmed; no LLM claim made. |
| GitHub repo | Bonney GitHub UI. | Bonney Chrome `Profile 2` login | Browser account preflight; final repo URL | Not applicable. | partial | Repo exists; local push may reject because CLI credentials are not Bonney. |
| Submission portal | Google Form. | Bonney Chrome `Profile 2` login | Browser snapshot and plan file. | Not applicable. | preflighted | Missing repo/X post/team Telegram/assets. |

Every external API, wallet, contract, dashboard, repo, submission portal, and browser identity must be listed here.
