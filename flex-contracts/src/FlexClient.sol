// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import '@chainlink/contracts/src/v0.8/ConfirmedOwner.sol';

contract FlexClient is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bytes32 private jobId;
    uint256 private fee;

    mapping(string => string) public accountToData;
    mapping(bytes32 => string) public requestIdToAccount;

    event RequestData(bytes32 indexed requestId, string id);

    /**
     * @notice Initialize the link token and target oracle
     *
     * Mumbai Testnet details:
     * Link Token: 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
     * Oracle: 0x45c37ba27F6d1AB33b6DE1628b2dF777DE96c08f (Chainlink DevRel)
     * jobId: 88a2f96374b1479980afc72439ef963d
     *
     */
    constructor(address _chainlinkToken, address _chainlinkOracle, bytes32 _jobId) ConfirmedOwner(msg.sender) {
        setChainlinkToken(_chainlinkToken);
        setChainlinkOracle(_chainlinkOracle);
        jobId = _jobId;
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data which is located in a list
     */
    function requestFlex(string memory _query, string memory _account) public returns (bytes32) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillCID.selector);

        // Build request
		req.add('query', _query);
        req.add('account', _account);

        // Sends the request
        bytes32 requestId = sendChainlinkRequest(req, fee);
        requestIdToAccount[requestId] = _account;
        return requestId;
    }

    /**
     * Receive the response in the form of string
     */
    function fulfillCID(bytes32 requestId, string memory value) public recordChainlinkFulfillment(requestId) {
        string memory account = requestIdToAccount[requestId];
        accountToData[account] = value;
        emit RequestData(requestId, value);
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), 'Unable to transfer');
    }
}
