const express = require("express");
const {
  create,
  getAllRecipe,
  getRecipe,
  update,
  remove,
} = require("../controllers/recipeController");

const router = express.Router();

router.post("/", create);
router.get("/", getAllRecipe);
router.get("/:id", getRecipe);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
