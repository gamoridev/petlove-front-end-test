const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

const index = require('./routes/index');
const cepRoute = require('./routes/cep.route');

app.use(express.static(path.join(__dirname, '../front-end/build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/cep', cepRoute);
app.use('/', index);

module.exports = app;