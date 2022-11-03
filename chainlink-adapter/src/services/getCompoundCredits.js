const { gql, request } = require("graphql-request")
const { Web3Storage, File } = require("web3.storage")
require("dotenv").config()

const web3ApiKey = process.env.WEB3_STORAGE_API

const endpoint =
  "https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2"

const query = gql`
  query getBorrowEvents($borrowerAccount: Bytes!) {
    borrowEvents(where: { borrower: $borrowerAccount }) {
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

module.exports = async function getCompoundCredits(req, res) {
  if (!req.body.data) {
    return res.status(400).json({
      error: "expected `data` in body of request",
    })
  }
  console.log(req.body.data)

  const { account } = req.body.data

  if (!account) {
    return res.status(400).json({
      error: "invalid request",
    })
  }

  const variables = {
    borrowerAccount: account,
  }

  try {
    const res = await request(endpoint, query, variables)
    const buffer = Buffer.from(JSON.stringify(res))
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
