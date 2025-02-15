const express = require("express");
const {
  create,
  getCategories,
  getCategory,
  update,
  remove,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/", create);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
