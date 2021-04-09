const express = require('express');
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')
const server = express();

server.use(express.json())

server.use("/api/actions", actionsRouter)
server.use("/api/projects", projectsRouter)

server.use((err,req,res,next) => {
  res.status(500).json({
    message: "Crash!",
    stack: err.stack
  })
})

module.exports = server;
