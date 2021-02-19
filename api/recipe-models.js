const { QueryBuilder } = require("knex");
const db = require("../data/dbconfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes as r")
    .select("i.ingredient_name", "c.quantity", "r.recipe_name", "r.recipe_id")
    .join("cook_steps as c", "r.recipe_id", "c.recipe_id")
    .join("ingredients as i", "c.ingredient_id", "i.ingredient_id")
    .where("r.recipe_id", id);
  //SQL Query
  //     select
  //     r.recipe_id,
  //     r.recipe_name,
  //     c.quantity,
  //     i.ingredient_name
  // from recipes as r
  //  join [cook_steps] as c
  //     on r.recipe_id = c.recipe_id
  //  join ingredients as i
  //     on c.ingredient_id = i.ingredient_id
  //     where r.recipe_id = 1
}

function getInstructions(id) {
  return db("cook_steps as c")
    .select(
      "r.recipe_name",
      "instruction_step",
      "instructions",
      "i.ingredient_name",
      "quantity"
    )
    .join("recipes as r", "r.recipe_id", "c.recipe_id")
    .join("ingredients as i", "c.ingredient_id", "i.ingredient_id")
    .where("r.recipe_id", id);

  //   SQL Query
  //   SELECT
  //   r.recipe_name,
  //     instruction_step,
  //      instructions,
  //     quantity,

  //     i.ingredient_name
  // from cook_steps as c
  // join recipes as r
  //     on r.recipe_id = c.recipe_id
  // join ingredients as i
  //     on c.ingredient_id = i.ingredient_id
}
