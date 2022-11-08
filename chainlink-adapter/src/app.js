require("express-group-routes")
const app = require("express")()
const cors = require("cors")
const bodyParser = require("body-parser")

const { store: storeQuery, get: getQuery } = require("./services/query")
const { get: getGraph } = require("./services/graph/get")

app.use(cors())
app.use(bodyParser.json())

app.group("/query", (router) => {
  router.post("/", storeQuery)
  router.get("/", getQuery)
})

app.group("/graph", (router) => {
  router.get("/", getGraph)
})

module.exports = app
