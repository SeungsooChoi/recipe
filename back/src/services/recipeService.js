const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createRecipe = async (recipe) => {
  return await prisma.recipe.create({
    data: recipe,
  });
};

const getRecipes = async (page = 1, pageSize = 10) => {
  const skip = (page - 1) * pageSize; // 몇 개의 데이터를 건너뛸지 계산

  const recipes = await prisma.recipe.findMany({
    skip: skip,
    take: pageSize,
    orderBy: {
      regDate: "desc", // 최신 등록된 레시피 순서대로 정렬
    },
  });

  // 전체 레시피 개수 조회
  const totalRecipes = await prisma.recipe.count();

  return {
    recipes,
    totalRecipes,
    totalPages: Math.ceil(totalRecipes / pageSize),
    currentPage: page,
  };
};

const getRecipeById = async (recipeId) => {
  return await prisma.recipe.findUnique({
    where: { id: recipeId },
  });
};

const updateRecipe = async (recipeId, updateData) => {
  return await prisma.recipe.update({
    where: { id: recipeId },
    data: updateData,
  });
};

const deleteRecipe = async (recipeId) => {
  return await prisma.recipe.delete({
    where: { id: recipeId },
  });
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
