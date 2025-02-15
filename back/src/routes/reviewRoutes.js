const express = require("express");
const {
  create,
  getReviews,
  getReview,
  update,
  remove,
} = require("../controllers/reviewController");

const router = express.Router();

router.post("/", create);
router.get("/", getReviews);
router.get("/:id", getReview);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
