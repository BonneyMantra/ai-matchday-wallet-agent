// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../contracts/MatchdayAgentWallet.sol";

contract MatchdayAgentWalletTest is Test {
    MatchdayAgentWallet internal wallet;
    address internal owner = address(0xA11CE);
    address internal agent = address(0xA9E17);
    bytes32 internal matchId = keccak256("ARG-FRA-2026-GROUP-A");

    function setUp() public {
        vm.prank(owner);
        wallet = new MatchdayAgentWallet(owner);
    }

    function testAgentSubmitsAndScoresCorrectPrediction() public {
        vm.prank(agent);
        wallet.submitPrediction(matchId, MatchdayAgentWallet.Pick.Home, "Argentina press rating edge");

        vm.prank(owner);
        wallet.resolveMatch(matchId, MatchdayAgentWallet.Pick.Home, "fixture-demo-result");

        wallet.scoreAgent(agent, matchId);

        (uint256 submitted, uint256 settled, uint256 correct) = wallet.agentStats(agent);
        assertEq(submitted, 1);
        assertEq(settled, 1);
        assertEq(correct, 1);
    }

    function testCannotSubmitTwiceForSameMatch() public {
        vm.startPrank(agent);
        wallet.submitPrediction(matchId, MatchdayAgentWallet.Pick.Home, "first pick");
        vm.expectRevert(MatchdayAgentWallet.AlreadySubmitted.selector);
        wallet.submitPrediction(matchId, MatchdayAgentWallet.Pick.Away, "second pick");
        vm.stopPrank();
    }

    function testOnlyOwnerCanResolve() public {
        vm.prank(agent);
        vm.expectRevert(MatchdayAgentWallet.NotOwner.selector);
        wallet.resolveMatch(matchId, MatchdayAgentWallet.Pick.Draw, "bad caller");
    }

    function testRequiresSubmittedPredictionBeforeScoring() public {
        vm.prank(owner);
        wallet.resolveMatch(matchId, MatchdayAgentWallet.Pick.Draw, "fixture-demo-result");

        vm.expectRevert(MatchdayAgentWallet.MissingPrediction.selector);
        wallet.scoreAgent(agent, matchId);
    }
}
