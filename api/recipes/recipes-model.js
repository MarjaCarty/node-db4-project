const db = require("../../data/db-config");

module.exports = {
  getRecipes() {
    return db("recipes");
  },
  getRecipeById(id) {
    return db("recipes").where({ id });
  },
  getIngredientById(id) {
    db("ingredients").where({ id });
  },
  getShoppingList(id) {
    // select r.recipe_name, i.ingredient_name, si.quantity
    // from recipes r
    // join 'steps' s
    //   on r.recipe_id = s.recipe_id
    // join 'steps_ingredients' si
    //   on s.step_id = si.step_id
    // join ingredients i
    //   on i.ingredient_id = si.ingredient_id
    // where r.recipe_id = id

    db("recipes as r")
      .join("steps as s", "s.recipe_id", "r.recipe_id")
      .join("steps_ingredients as si", "s.step_id", "si.step_id")
      .join("ingredients as i", "i.ingredient_id", "si.ingredient_id")
      .select("r.recipe_name, i.ingredient_name, si.quantity")
      .where("r.recipe_id", id);
  },
  getInstructions(id) {
    // select r.recipe_name, s.step_number, s.step_text
    // from recipes r
    // join 'steps' s
    //   on r.recipe_id = s.recipe_id
    // where r.recipe_id = 1
    // order by s.step_number

    db("recipes as r")
      .join("steps as s", "r.recipe_id", "s.recipe_id")
      .select("r.recipe_name", "s.step_number", "s.step_text")
      .where("r.recipe_id", id)
      .orderBy("s.step_number");
  },
};
