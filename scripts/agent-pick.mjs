import fixtures from "../data/fixtures.json" with { type: "json" };
import { writeJson } from "./shared.mjs";

const fixture = fixtures[0];

function heuristicPick(match) {
  const { homeMomentum, awayMomentum, drawPressure } = match.features;
  if (drawPressure > 55) return "draw";
  return homeMomentum >= awayMomentum ? "home" : "away";
}

const hasModelKey = Boolean(process.env.OPENAI_API_KEY);
const pick = heuristicPick(fixture);
const decision = {
  generatedAt: new Date().toISOString(),
  decisionMode: hasModelKey ? "model-adapter-not-used-in-this-run" : "fixture-heuristic",
  fixturePolicy: "Seeded demo fixture; not live sports data.",
  matchIdLabel: fixture.matchIdLabel,
  fixture,
  pick,
  rationale:
    pick === "home"
      ? `${fixture.home} has the stronger demo momentum score in the labeled fixture.`
      : `${fixture.away} has the stronger demo momentum score in the labeled fixture.`,
};

writeJson("proofs/agent-decision.json", decision);
writeJson("public/proofs/agent-decision.json", decision);
console.info(`Agent decision written: ${decision.matchIdLabel} -> ${decision.pick}`);
