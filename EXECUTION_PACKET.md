# Execution Packet

## Project

Name: Matchday Wallet Agent  
Hackathon: X Layer X Cup Hackathon 2026  
Track fit: AI Agent, Prediction Markets, Social  
Primary submitter: Bonney / `BonneyMantra`

## One-Liner

A World Cup matchday agent with its own wallet signs non-cash predictions, records accuracy through a smart contract, and produces judge-readable X Layer proof artifacts.

## Demo Script

1. Open the app hero and show the fixture/demo label.
2. Show the agent wallet and pick rationale.
3. Run the local signed proof or show the generated proof JSON.
4. Show `PredictionSubmitted` and `MatchResolved` evidence.
5. Show the agent accuracy row.
6. Show the prepared X Layer transaction path and blocker if no funded key exists.

## Judging Mapping

- Innovation: wallet-owned matchday agent, not chatbot-only.
- Market potential: fans can copy/fade/challenge an accountable public oracle during tournament attention spikes.
- Completion: contract tests, local signed proof, X Layer RPC smoke, demo UI, and truth audit.
- On-chain verifiability: local proof now; X Layer explorer proof blocked until funded signer is provided.

## README Claims Allowed

- Allowed: local/anvil wallet-signed proof, X Layer RPC compatibility, deployment scripts ready.
- Blocked: deployed on X Layer, live sports-data oracle, autonomous X posting, final hackathon submission.

## Final Checklist

- [x] `forge test`
- [x] `npm run rpc:smoke`
- [x] `npm run agent:pick`
- [x] `npm run anvil:proof`
- [x] `npm run build`
- [x] Browser screenshots at 375/768/1440
- [x] Public repo created; push pending credential check
- [ ] Builder report written
