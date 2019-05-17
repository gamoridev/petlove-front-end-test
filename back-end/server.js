const express = require('express');
const app = require('./config');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Escutando servidor na porta :${port}`));