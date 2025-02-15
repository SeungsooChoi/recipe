const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createReview = async (data) => {
  return await prisma.review.create({ data });
};

const getAllReviews = async () => {
  return await prisma.review.findMany();
};

const getReviewById = async (id) => {
  return await prisma.review.findUnique({ where: { id } });
};

const updateReview = async (id, data) => {
  return await prisma.review.update({
    where: { id },
    data,
  });
};

const deleteReview = async (id) => {
  return await prisma.review.delete({ where: { id } });
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
