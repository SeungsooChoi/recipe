const express = require("express");
const { getUsers, getUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers); // 전체 유저 목록
router.get("/:id", getUser); // 유저 조회

module.exports = router;
