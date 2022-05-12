const express = require("express");

const server = express();

const usersRouter = require("./users-router");
const registerRouter = require("./register-router");

server.use(express.json());

server.get("/", (req, res, next) => {
  res.json({ message: "hello world!" });
});

server.use("/api/users", usersRouter);
server.use("/api/register", registerRouter);
// server.use('/api/login')

module.exports = server;
