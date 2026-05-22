# UI Template Plan

## Selected Production Template

Primary influence: `template-creative-tool` / LottieFiles-style creative product surface from Gabriel's templates catalog, blended with the `template-webgl-studio` dark studio sensibility. The app needs to feel like a live match command surface, not a CRUD dashboard.

## Selected MotionSites Prompts

| Prompt | Why |
|---|---|
| `orbis-nft-landing` | Liquid glass panels, dark space/video atmosphere, uppercase sports-poster typography, collectible/proof-card language. |
| `sentinel-ai-hero` | Bottom-left agent command hero, dark AI/security mood, bright green signal color, Sora typography, compact trust/proof line. |

## Visual System

- Typeface: Sora for interface and agent/proof text; optional condensed uppercase treatment for hero labels.
- Palette: charcoal black, turf green, chalk white, referee yellow, alert red. Avoid one-note purple/blue gradients.
- Surface: liquid-glass proof panels over a kinetic stadium-light background.
- Cards: only for repeated proof/fixture records; no nested cards.
- Motion: subtle scanline/scoreboard movement, pulsing transaction status, reduced-motion support.

## First-Screen Judge Moment

The first viewport must immediately show:

- product name: `Matchday Wallet Agent`
- agent wallet address/proof status
- current fixture and pick
- primary CTA: run local signed proof / prepare X Layer transaction
- clear label when data is fixture/demo

## Interaction Details

- Hero is the product surface, not marketing fluff.
- Main workflow is a horizontal/vertical timeline: pick -> sign -> submit -> settle -> score.
- Proof drawer shows tx hash, chain, contract address, signer, and source label.
- Share artifact is generated as copy text only; no autonomous X posting claim.

## Code / Design Patterns To Reuse

- Orbis liquid-glass CSS border treatment, adapted to smaller proof panels.
- Sentinel dark hero hierarchy and Sora font loading.
- MotionSites full-viewport atmosphere and uppercase navigation, but with app controls in the first screen.

## Visual QA Acceptance

- Screenshots at 375, 768, and 1440 px.
- No horizontal overflow.
- Hero controls remain visible above the fold on mobile.
- Fixture/demo labels remain visible anywhere seeded data appears.
- Buttons do not resize layout when proof state changes.
