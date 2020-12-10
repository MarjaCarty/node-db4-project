exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_text: "Mix butter, sugar, flour, baking soda in bowl",
          step_number: 1,
          recipe_id: 1,
        },
        {
          step_text: "Proof 50 minutes in proofer",
          step_number: 2,
          recipe_id: 1,
        },
        { step_text: "Bake for 60 minutes", step_number: 3, recipe_id: 1 },
        {
          step_text: "Mix butter, sugar, vanilla, baking soda in bowl",
          step_number: 1,
          recipe_id: 2,
        },
        {
          step_text: "Incoporate hot coffee slowly",
          step_number: 2,
          recipe_id: 2,
        },
        { step_text: "Bake for 35 minutes", step_number: 3, recipe_id: 2 },
        {
          step_text: "Mix butter, sugar, baking soda, vanilla in bowl",
          step_number: 1,
          recipe_id: 3,
        },
        {
          step_text: "Chop baking chocolate and incorporate",
          step_number: 2,
          recipe_id: 3,
        },
        { step_text: "Bake for 10 minutes", step_number: 3, recipe_id: 3 },
      ]);
    });
};
