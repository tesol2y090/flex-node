// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./FlexClient.sol";

contract Sample is FlexClient {

	string public cid;

	constructor(address _chainlinkToken, address _chainlinkOracle, string memory _getRequestJobId, string memory _getFieldJobId, string memory _cid) 
		FlexClient(_chainlinkToken, _chainlinkOracle, _getRequestJobId, _getFieldJobId) {
		cid = _cid;
	}

	function requestFlexData(string memory _account) external returns (bytes32) {
		bytes32 requestId = requestFlex(cid, _account);
		return requestId;
	}

	function getFieldData(string memory _path, string memory _account) external returns (bytes32) {
		bytes32 requestId = requestField(_path, _account);
		return requestId;
	}

}