const express = require("express");

const userRouter = require("./users/userRouter.js");
const authRouter = require("./auth/authRouter.js");

const server = express();

server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h2>It's Working!</h2>`);
});

module.exports = server;
