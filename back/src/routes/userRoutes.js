const express = require("express");
const { getUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/profile", getUsers); // 사용자 프로필 조회

module.exports = router;
