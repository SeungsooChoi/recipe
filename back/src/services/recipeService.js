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
    include: {
      user: {
        // 만약 user 정보도 같이 보고 싶다면 이렇게
        // userName, email 등 필요한 필드만 select
        select: {
          id: true,
          userName: true,
          email: true,
        },
      },
      steps: {
        select: {
          stepNumber: true,
          instruction: true,
        },
        orderBy: {
          stepNumber: "asc", // 1단계, 2단계 순으로
        },
      },
      tags: {
        // RecipeTag[] 자체만 받아오면 tagId만 나오므로,
        // 실제 Tag 테이블의 name 같은 필드도 보고 싶다면 아래처럼.
        include: {
          tag: { select: { name: true } },
        },
      },
      reviews: {
        select: {
          // review 테이블에서 직접 가져올 필드
          id: true,
          comment: true,
          rating: true,
          regDate: true,
          // review -> user 관계에서 userName만
          user: {
            select: {
              userName: true,
            },
          },
        },
      },
      favorites: true, // Favorite[]
      likes: true, // Like[]
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
