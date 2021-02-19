const express = require("express");

const RecipeRouter = require("./recipe-routers");

const server = express();
server.use(express.json());
server.use("/api/recipes", RecipeRouter);

server.get("*", (req, res) => {
  res.json({ message: "API UP" });
});
module.exports = server;
