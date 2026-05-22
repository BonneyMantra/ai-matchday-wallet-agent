# Repo Plan

## Public Repo

- Proposed repo name: `ai-matchday-wallet-agent`
- Owner: Bonney / GitHub account `BonneyMantra`
- Visibility: public
- Creation method: `agent-browser` with Chrome `Profile 2` because local `gh` CLI is not authenticated as Bonney.

## Current Status

- Bonney GitHub preflight: done on 2026-05-22 with session `xcup-bonney-github-preflight`.
- Repo creation: done through `agent-browser` session `create-bonney-xcup-repo-2`.
- Public repo URL: `https://github.com/BonneyMantra/ai-matchday-wallet-agent`.
- Local commit: `fc8b430` (`Build matchday wallet agent demo`).
- Push: blocked. `git push -u origin main` returned HTTP 403 because permission to `BonneyMantra/ai-matchday-wallet-agent.git` was denied to `gabrielantonyxaviour`.

## Steps

1. Finish local code and proof artifacts.
2. Create public repo through GitHub UI as Bonney using `agent-browser`.
3. Add remote and push `main`.
4. Record final repo URL and public visibility evidence here and in `QUALITY_GATE.md`.

## Blockers

- Pushing code requires Bonney Git credentials/token, adding the current CLI account as a collaborator, or an approved browser upload path.
- If GitHub asks for password, passkey, CAPTCHA, or email security confirmation, stop and record the blocker.
