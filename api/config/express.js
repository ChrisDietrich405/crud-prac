const express = require('express'),
    app = express(),
    consign = require('consign');

app.use(express.json());

consign()
    .include('routes')
    .then('infra')
    .then('app')
    .into(app);

module.exports = app;