require("express-group-routes")
const app = require("express")()
const cors = require("cors")
const bodyParser = require("body-parser")

const {
  getCompoundCredits,
  computeCompoundCredits,
} = require("./services/compoundCredits")
const { store, get } = require("./services/query")

app.use(cors())
app.use(bodyParser.json())

app.group("/query", (router) => {
  router.post("/", store)
  router.get("/", get)
})

app.group("/get", (router) => {
  router.post("/compoundCredits", getCompoundCredits)
})

app.group("/compute", (router) => {
  router.post("/compoundCredits", computeCompoundCredits)
})

module.exports = app
