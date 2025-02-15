const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCategory = async (data) => {
  return await prisma.category.create({ data });
};

const getAllCategories = async () => {
  return await prisma.category.findMany();
};

const getCategoryById = async (id) => {
  return await prisma.category.findUnique({ where: { id } });
};

const updateCategory = async (id, data) => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};

const deleteCategory = async (id) => {
  return await prisma.category.delete({ where: { id } });
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
