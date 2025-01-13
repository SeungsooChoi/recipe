const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register); // 회원가입
router.post("/login", login); // 로그인

module.exports = router;
