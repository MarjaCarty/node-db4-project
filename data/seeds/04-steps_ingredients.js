exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps_ingredients").insert([
        { quantity: 2, step_id: 1, ingredient_id: 1 },
        { quantity: 0.5, step_id: 1, ingredient_id: 2 },
        { quantity: 3, step_id: 1, ingredient_id: 3 },
        { quantity: 0.1, step_id: 1, ingredient_id: 5 },
        { quantity: 2, step_id: 4, ingredient_id: 1 },
        { quantity: 1, step_id: 4, ingredient_id: 2 },
        { quantity: 0.2, step_id: 4, ingredient_id: 4 },
        { quantity: 0.1, step_id: 4, ingredient_id: 5 },
        { quantity: 1, step_id: 5, ingredient_id: 7 },
        { quantity: 1.5, step_id: 7, ingredient_id: 1 },
        { quantity: 2, step_id: 7, ingredient_id: 2 },
        { quantity: 0.1, step_id: 7, ingredient_id: 3 },
        { quantity: 0.1, step_id: 7, ingredient_id: 5 },
        { quantity: 8, step_id: 8, ingredient_id: 6 },
      ]);
    });
};
