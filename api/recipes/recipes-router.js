const express = require("express");
const { getRecipeById } = require("./recipes-model");

const Recipe = require("./recipes-model");

const router = express.Router();

const validateId = async (req, res, next) => {
  const { id } = req.params;

  const checkedId = await getRecipeById(id);

  if (!checkedId) {
    res.status(404).json({ message: "A recipe with this id does not exist" });
  } else {
    next();
  }
};

router.get("/", async (_, res) => {
  try {
    const recipes = await Recipe.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/shoppingList", validateId, async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingList = await Recipe.getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/instructions", validateId, async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await Recipe.getInstructions(id);
    res.status(200).json(instructions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
