const { gql, request } = require("graphql-request")
const { Web3Storage, File } = require("web3.storage")
const { getFileUrl } = require("../utils")
const axios = require("axios").default
require("dotenv").config()

const web3ApiKey = process.env.WEB3_STORAGE_API

const endpoint =
  "https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2"

const query = gql`
  query getBorrowEvents($account: ID!, $borrower: Bytes!) {
    account(id: $account) {
      countLiquidated
      hasBorrowed
      health
      totalBorrowValueInEth
      totalCollateralValueInEth
    }
    repayEvents(where: { borrower: $borrower }) {
      accountBorrows
      amount
      borrower
      id
      payer
      underlyingSymbol
    }
    borrowEvents(where: { borrower: $borrower }) {
      accountBorrows
      amount
      blockNumber
      blockTime
      borrower
      id
      underlyingSymbol
    }
  }
`

const storage = new Web3Storage({ token: web3ApiKey })

const getCompoundCredits = async (req, res) => {
  if (!req.body.data) {
    return res.status(400).json({
      error: "expected `data` in body of request",
    })
  }
  console.log("req.body.data", req.body.data)

  const { account } = req.body.data

  if (!account) {
    return res.status(400).json({
      error: "invalid request",
    })
  }

  const variables = {
    account: account,
    borrower: account,
  }

  try {
    const dataRes = await request(endpoint, query, variables)
    const buffer = Buffer.from(JSON.stringify(dataRes))
    const dataFile = [new File([buffer], `${account}-compound-credits.json`)]
    const cid = await storage.put(dataFile)
    console.log("stored files with cid:", cid)
    return res.status(200).json({
      credits: cid,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "something went wrong",
    })
  }
}

const computeCompoundCredits = async (req, res) => {
  if (!req.body.data) {
    return res.status(400).json({
      error: "expected `data` in body of request",
    })
  }
  console.log("req.body.data", req.body.data)

  const { cid } = req.body.data

  if (!cid) {
    return res.status(400).json({
      error: "invalid request",
    })
  }

  try {
    const dataRes = await storage.get(cid)
    if (!dataRes.ok) {
      throw new Error(
        `failed to get ${cid} - [${dataRes.status}] ${dataRes.statusText}`
      )
    }

    // unpack File objects from the response
    const files = (await dataRes.files())[0]
    const fileUrl = getFileUrl(cid, files.name)

    const creditData = await axios.get(fileUrl)

    return res.status(200).json({
      data: "gagn",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "something went wrong",
    })
  }
}

module.exports = {
  getCompoundCredits,
  computeCompoundCredits,
}
