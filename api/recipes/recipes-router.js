const express = require("express");

const Recipe = require("./recipes-model");

const router = express.Router();

const validateRecipeId = async (req, res, next) => {
  const { id } = req.params;

  const checkedId = await getRecipeById(id);

  if (!checkedId) {
    res.status(404).json({ message: "A recipe with this id does not exist" });
  } else {
    next();
  }
};

const validateIngredientId = async (req, res, next) => {
  const { id } = req.params;

  const checkedId = await getIngredientById(id);

  if (!checkedId) {
    res.status(404).json({ message: "A recipe with this id does not exist" });
  } else {
    next();
  }
};

router.get("/", (_, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/shoppingList", validateRecipeId, (_, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id/instructions", validateRecipeId, (_, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/ingredients/:id/recipes", validateIngredientId, (_, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
