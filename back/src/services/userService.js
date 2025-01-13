const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 모든 사용자 가져오기
const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// 사용자 생성
const createNewUser = async (name, email) => {
  return await prisma.user.create({
    data: {
      name,
      email,
    },
  });
};

module.exports = { getAllUsers, createNewUser };
