exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "butter" },
        { ingredient_name: "sugar" },
        { ingredient_name: "flour" },
        { ingredient_name: "vanilla" },
        { ingredient_name: "baking soda" },
        { ingredient_name: "baking chocolate" },
        { ingredient_name: "coffee" },
      ]);
    });
};
