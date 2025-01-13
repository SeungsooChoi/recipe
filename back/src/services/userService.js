const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const HttpError = require("../utils/HttpError");

// 모든 사용자 가져오기
const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (req) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!user) {
      throw new HttpError("검색된 유저가 없습니다다.", 404);
    }
    return user;
  } catch (error) {
    throw new HttpError("Error fetching user", 500);
  }
};

// 사용자 생성
const createNewUser = async (req) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    return user;
  } catch (error) {
    throw new HttpError("회원가입에 실패하였습니다.", 500);
  }
};

module.exports = { getAllUsers, getUserById, createNewUser };
