const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router')

server.use("/api/actions", actionsRouter)

module.exports = server;
