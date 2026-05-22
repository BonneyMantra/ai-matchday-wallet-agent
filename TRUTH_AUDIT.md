# Truth Audit

Hackathon: X Layer X Cup Hackathon 2026
Idea: AI Matchday Wallet Agent

| Claim | Reality: real / fixture / mock / blocked / not attempted / removed | Evidence | User-facing label needed? | Action |
|---|---|---|---|---|
| Product is working | real local demo | `npm run check` passed; browser screenshots under `outputs/screenshots/`. | no | Call it demo-ready, not submit-ready. |
| X Layer RPC is reachable | real | `eth_chainId -> 0x7a0`; `eth_blockNumber -> 0x1d85618` on 2026-05-22. | no | Preserve smoke proof in `proofs/`. |
| Agent has signed an on-chain prediction | real local/anvil | `proofs/local-anvil-proof.json`, submit tx `0x1a1c0cb67a4740bd1b61995f87fc67c77693daf5338206110f9d283a15906ae2`. | yes, as local/anvil only | Live X Layer tx still blocked. |
| Project is deployed on X Layer | blocked | No funded signer/private key or wallet path available. | yes | Ask Gabriel for funded deployer or approved wallet path. |
| Match data is live sports data | removed | MVP uses seeded fixture/demo data. | yes | Do not claim live sports oracle. |
| X posting is automated/live | removed | No approval to post. | yes | Generate post template only. |
| Submission is ready/final | blocked | Form preflight done; required repo/X post/team contact fields missing. | no | Prepare packet; do not final submit. |
| Public repo exists | real | `https://github.com/BonneyMantra/ai-matchday-wallet-agent`; screenshot `outputs/screenshots/github-repo-bonney.png`. | no | Push status still pending credential verification. |

Rules:
- Do not claim live, onchain, deployed, submitted, verified, paid, sent, minted, uploaded, or connected without evidence.
- Fixtures are allowed only when visible in UI, README, demo script, and QUALITY_GATE.md.
