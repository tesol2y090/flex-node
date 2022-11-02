const { gql, request } = require("graphql-request")

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

  console.log("variables", variables)

  try {
    const data = await request(endpoint, query, variables)
    console.log(data)
    return res.status(200).json({
      credits: data,
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "something went wrong",
    })
  }
}
