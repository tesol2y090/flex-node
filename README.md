# Flex Node : Chainlink Hackathon Spring 2022

[![Flex Node](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/300/991/datas/original.png)](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/300/991/datas/original.png)

[Flex Node Demo Page](https://flex-node.vercel.app/)

Our smart contract is live on polygon mumbai testnet

## Description

Flex node allows users to write graphql query commands or our template command to query on-chain activities such as borrows events in compounds on Polygon mainnet or nft holding in opensea on Ethereum mainnet and store those file as json file into ipfs via web3.storage.

When smart contract want to calculate those file, we also provide chainink external adapter to get those file and compute on chainlink node and send result back into smart contract.

## Architecture

![Flex Node Architecture](https://flex-node.vercel.app/architecture.png)

We implement 2 layers, storage layer and execution layer.

1. Storage layer, We use IPFS to store query commands data and on-chain data.
2. Execution layer, Our stack separates into 3 parts, Chainlink node, Chainlink external adapter, flex-contract and flex-frontend.

- Chainlink node

  We create our own spec and job to parse data from our external adapter on polygon mumbai testnet.

- Chainlink external adapter

  We have 2 external adapters that do different tasks.

  Get on-chain data using graphql command and return cid from ipfs.
  Get specific data that is stored on cid.

- Flex contracts

  Sample contract that gets on-chain data and how to build requests from our flex-node.

---

## What next's

1. The query creator has incentive from everyone using their query command.
2. Dynamic query variable.
3. Support Non-evm chain.
4. Support more third party on-chain query data.
