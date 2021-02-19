exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cook_steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cook_steps").insert([
        {
          instructions: "Flatten Dough",
          ingredient_id: 2,
          quantity: "3 cups",
          recipe_id: 1,
          instruction_step: 1,
        },
        {
          instructions: "Spread tomato paste",
          ingredient_id: 1,
          quantity: "3 ounces",
          recipe_id: 1,
          instruction_step: 2,
        },
        {
          instructions: "Add cheese",
          ingredient_id: 3,
          quantity: "1 cup",
          recipe_id: 1,
          instruction_step: 3,
        },
        {
          instructions: "Bake Pizza",
          ingredient_id: 5,
          quantity: "365 degrees",
          recipe_id: 1,
          instruction_step: 4,
        },
        {
          instructions: "Cut cucumbers",
          ingredient_id: 6,
          quantity: "1 Cucumber",
          recipe_id: 2,
          instruction_step: 1,
        },
        {
          instructions: "Slice fish",
          ingredient_id: 7,
          quantity: "3 filets",
          recipe_id: 2,
          instruction_step: 2,
        },
        {
          instructions: "Roll roll with seaweed",
          ingredient_id: 8,
          quantity: "1 package",
          recipe_id: 2,
          instruction_step: 3,
        },
      ]);
    });
};
