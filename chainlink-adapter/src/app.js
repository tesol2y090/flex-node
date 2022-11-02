const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const getCompoundCredits = require('./services/getCompoundCredits');

app.use(cors());
app.use(bodyParser.json());

app.get('/getCompoundCredits', getCompoundCredits);

module.exports = app;