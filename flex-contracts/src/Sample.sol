// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./FlexClient.sol";

contract Sample is FlexClient {
    string public cid;

    constructor(
        address _chainlinkToken,
        address _chainlinkOracle,
        string memory _getFlexJobId,
        string memory _getFieldStringJobId,
        string memory _getFieldUintJobId,
        string memory _cid
    )
        FlexClient(
            _chainlinkToken,
            _chainlinkOracle,
            _getFlexJobId,
            _getFieldStringJobId,
            _getFieldUintJobId
        )
    {
        cid = _cid;
    }

    function requestFlexData(string memory _account)
        external
        returns (bytes32)
    {
        bytes32 requestId = requestFlex(cid, _account);
        return requestId;
    }

    function getFieldDataString(string memory _path, string memory _account)
        external
        returns (bytes32)
    {
        bytes32 requestId = requestFieldString(_path, _account);
        return requestId;
    }

    function getFieldDataUint(string memory _path, string memory _account)
        external
        returns (bytes32)
    {
        bytes32 requestId = requestFieldUint(_path, _account);
        return requestId;
    }
}
