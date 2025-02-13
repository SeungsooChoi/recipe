const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createRecipe = async (recipe) => {
  return await prisma.recipe.create({
    data: recipe,
  });
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

module.exports = { createRecipe, getRecipeById, updateRecipe, deleteRecipe };
