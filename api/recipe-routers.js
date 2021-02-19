const express = require("express");

const Recipe = require("./recipe-models");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(404).json("error");
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;
  Recipe.getShoppingList(id)
    .then((list) => {
      res.status(201).json(list);
    })
    .catch((err) => {
      res.status(500).json("error");
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipe.getInstructions(id)
    .then((list) => {
      res.status(201).json(list);
    })
    .catch((err) => {
      res.status(500).json("error");
    });
});

module.exports = router;
