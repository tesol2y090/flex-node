const { gql, request } = require("graphql-request")
const { Web3Storage, File } = require("web3.storage")
const { getFileUrl } = require("../../utils")
const axios = require("axios").default
require("dotenv").config()

const web3ApiKey = process.env.WEB3_STORAGE_API

const storage = new Web3Storage({ token: web3ApiKey })

const store = async (req, res) => {
  if (!req.body.data) {
    return res.status(400).json({
      error: "expected `data` in body of request",
    })
  }
  console.log("req.body.data", req.body.data)

  const { name, endpoint, query, chainId } = req.body.data

  if (!name || !endpoint || !query || !chainId) {
    return res.status(400).json({
      error: "invalid request",
    })
  }

  try {
    const payload = {
      name,
      endpoint,
      query,
      chainId,
    }

    const buffer = Buffer.from(JSON.stringify(payload))
    const dataFile = [new File([buffer], `${name}.json`)]
    const cid = await storage.put(dataFile)
    console.log("stored files with cid:", cid)
    return res.status(200).json({
      data: {
        query: cid,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "something went wrong",
    })
  }
}

const get = async (req, res) => {
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

    const [file] = (await dataRes.files())

    const fileUrl = getFileUrl(cid, file.name)

    const queryData = await axios.get(fileUrl)

    const { name, endpoint, query, chainId } = queryData.data

    return res.status(200).json({
      data: {
        name,
        endpoint,
        query,
        chainId,
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "something went wrong",
    })
  }
}

module.exports = {
  store,
  get,
}
