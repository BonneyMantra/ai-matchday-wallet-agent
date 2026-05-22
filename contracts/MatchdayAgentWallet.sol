// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MatchdayAgentWallet {
    enum Pick {
        Home,
        Draw,
        Away
    }

    struct Prediction {
        Pick pick;
        bool submitted;
        bool settled;
        bool correct;
        string rationale;
    }

    struct Stats {
        uint256 submitted;
        uint256 settled;
        uint256 correct;
    }

    address public immutable owner;
    mapping(bytes32 => bool) public resolved;
    mapping(bytes32 => Pick) public results;
    mapping(address => Stats) public agentStats;
    mapping(address => mapping(bytes32 => Prediction)) private predictions;

    event PredictionSubmitted(
        address indexed agent,
        bytes32 indexed matchId,
        Pick pick,
        string rationale
    );
    event MatchResolved(bytes32 indexed matchId, Pick result, string sourceLabel);
    event AgentScored(address indexed agent, bytes32 indexed matchId, bool correct);

    error NotOwner();
    error AlreadySubmitted();
    error AlreadyResolved();
    error MatchNotResolved();
    error MissingPrediction();
    error InvalidRationale();

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    constructor(address initialOwner) {
        owner = initialOwner == address(0) ? msg.sender : initialOwner;
    }

    function submitPrediction(bytes32 matchId, Pick pick, string calldata rationale) external {
        if (bytes(rationale).length == 0 || bytes(rationale).length > 280) {
            revert InvalidRationale();
        }

        Prediction storage prediction = predictions[msg.sender][matchId];
        if (prediction.submitted) revert AlreadySubmitted();

        prediction.pick = pick;
        prediction.submitted = true;
        prediction.rationale = rationale;
        agentStats[msg.sender].submitted += 1;

        emit PredictionSubmitted(msg.sender, matchId, pick, rationale);
    }

    function resolveMatch(bytes32 matchId, Pick result, string calldata sourceLabel) external onlyOwner {
        if (resolved[matchId]) revert AlreadyResolved();
        resolved[matchId] = true;
        results[matchId] = result;
        emit MatchResolved(matchId, result, sourceLabel);
    }

    function scoreAgent(address agent, bytes32 matchId) external {
        if (!resolved[matchId]) revert MatchNotResolved();

        Prediction storage prediction = predictions[agent][matchId];
        if (!prediction.submitted) revert MissingPrediction();
        if (prediction.settled) revert AlreadyResolved();

        bool correct = prediction.pick == results[matchId];
        prediction.settled = true;
        prediction.correct = correct;
        agentStats[agent].settled += 1;
        if (correct) {
            agentStats[agent].correct += 1;
        }

        emit AgentScored(agent, matchId, correct);
    }

    function predictionOf(address agent, bytes32 matchId) external view returns (Prediction memory) {
        return predictions[agent][matchId];
    }
}
