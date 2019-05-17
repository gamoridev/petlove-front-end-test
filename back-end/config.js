const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const index = require('./routes/index');
const cepRoute = require('./routes/cep.route');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/cep', cepRoute);
app.use('/', index);

module.exports = app;