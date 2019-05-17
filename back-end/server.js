const express = require('express');
const app = require('./config');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Escutando servidor na porta :${port}`));