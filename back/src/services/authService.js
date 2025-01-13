const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 사용자 로그인
const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  // JWT 토큰 발급
  const token = jwt.sign({ id: user.id, email: user.email }, "secretKey");
  return { user, token };
};

// 사용자 회원가입
const registerUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};

module.exports = { loginUser, registerUser };
