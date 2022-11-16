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
     * Oracle: 0x364AAB5aBd6C0B42f9Ba347dF024B67Cc6a4a882
     * jobId: 98c356d16abe49e4939846ee6c52a364
     *
     */
    constructor(address _chainlinkToken, address _chainlinkOracle, string memory _jobId) ConfirmedOwner(msg.sender) {
        setChainlinkToken(_chainlinkToken);
        setChainlinkOracle(_chainlinkOracle);
        jobId = stringToBytes32(_jobId);
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data which is located in a list
     * @param
     * _cid : cid
     * _account : an address to fetchdata
     */
    function requestFlex(string memory _cid, string memory _account) public returns (bytes32) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillCID.selector);

        // Build request
		req.add('cid', _cid);
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

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            result := mload(add(source, 32))
        }
    }
}
