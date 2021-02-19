exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Tomato Paste" },
        { ingredient_name: "Pizza Dough" },
        { ingredient_name: "Mozzerella" },
        { ingredient_name: "Fire" },
        { ingredient_name: "Cucumbers" },
        { ingredient_name: "Salmon" },
        { ingredient_name: "Seaweed" },
        { ingredient_name: "Carrots" },
        { ingredient_name: "Edameme" },
        { ingredient_name: "Salami" },
        { ingredient_name: "Onions" },
      ]);
    });
};
