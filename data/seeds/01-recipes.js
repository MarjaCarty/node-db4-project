exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "bread" },
        { recipe_name: "cupcakes" },
        { recipe_name: "cookies" },
      ]);
    });
};
