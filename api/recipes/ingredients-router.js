const express = require("express");

const Recipe = require("./recipes-model");

const router = express.Router();

const validateId = async (req, res, next) => {
  const { id } = req.params;

  const checkedId = await getIngredientById(id);

  if (!checkedId) {
    res.status(404).json({ message: "A recipe with this id does not exist" });
  } else {
    next();
  }
};

router.get("/:id/recipes", validateId, (_, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
