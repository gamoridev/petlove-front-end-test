const express = require('express');
var cors = require('cors')
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const index = require('./routes/index');
const cepRoute = require('./routes/cep.route');

app.use(cors());
app.use(express.static(path.join(__dirname, '../front-end/build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/cep', cepRoute);
app.use('/', index);

module.exports = app;