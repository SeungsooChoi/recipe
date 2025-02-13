const express = require("express");
const {
  create,
  getRecipe,
  update,
  remove,
} = require("../controllers/recipeController");

const router = express.Router();

router.post("/", create);
router.get("/:id", getRecipe);
router.put("/:", update);
router.delete("/:", remove);

module.exports = router;
