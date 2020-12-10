const express = require("express");

const RecipeRouter = require("./recipes/recipes-router");
const IngredientRouter = require("./recipes/ingredients-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientRouter);

server.get("/", (_, res) => {
  res.json({ message: "api running" });
});

module.exports = server;
