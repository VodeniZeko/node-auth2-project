const express = require("express");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../user/user-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
// server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send({ api: "runin runin" });
});

module.exports = server;
