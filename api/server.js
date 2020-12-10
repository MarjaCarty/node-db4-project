const express = require("express");

const RecipeRouter = require("./recipes/recipes-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", RecipeRouter);

server.get("/", (_, res) => {
  res.json({ message: "api running" });
});

module.exports = server;
