# Judging Notes

## Innovation

The project is not a chatbot-only flow. A wallet-owning matchday agent signs prediction transactions and can be copied, faded, or challenged by fans once deployed.

## Market Potential

The World Cup hook is built around repeatable fan activity: match picks, public accuracy, shareable receipts, and project X account prompts.

## X Layer Fit

The product needs cheap repeated writes:

- submit prediction
- resolve fixture
- score agent
- publish proof links

X Layer testnet RPC compatibility is proven. Live X Layer transaction proof is blocked only by the missing funded signer.

## Completion

Completed in this run:

- Solidity contract.
- Foundry tests.
- Node/viem proof scripts.
- Local/anvil signed transaction proof.
- X Layer RPC smoke proof.
- Vite React demo UI.
- Local visual QA at 375, 768, and 1440 px.

## Fixture Honesty

Fixture/demo data is used for the match and result. The UI and docs label it. There is no live sports oracle claim.
