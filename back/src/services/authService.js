const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const session = require("express-session");

// 사용자 로그인
const loginUser = async (email, password) => {
  // 사용자 조회
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid credentials!");
  }

  // 비밀번호 확인
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials!");
  }

  // 세션 저장
  session.user = { email: user.email }; // TODO: 세션에 뭘 저장할지
  return "Login successful!";
};

// 사용자 회원가입
const registerUser = async (email, password) => {
  // 중복 확인
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists!");
  }

  // 비밀번호 해싱
  const hashedPassword = await bcrypt.hash(password, 10);

  // 사용자 생성
  return await prisma.user.create({
    data: { email, password: hashedPassword },
  });
};

module.exports = { loginUser, registerUser };
