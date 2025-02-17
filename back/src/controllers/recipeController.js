const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../services/recipeService");

const create = async (req, res) => {
  try {
    const recipe = await createRecipe(req.body);
    res.success(recipe);
  } catch (error) {
    res.error(error, error.message);
  }
};

const getAllRecipe = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // 기본값 1
    const pageSize = parseInt(req.query.pageSize) || 10; // 기본값 10

    const recipes = await getRecipes(page, pageSize);
    res.success(recipes);
  } catch (error) {
    res.error(error, error.message);
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await getRecipeById(req.params.id);

    if (!recipe) {
      return res.error(err, "레시피가 없습니다.");
    }
    res.success(recipe);
  } catch (error) {
    res.error(error, error.message);
  }
};

const update = async (req, res) => {
  try {
    const recipe = await updateRecipe(req.params.id, req.body);
    res.success(null, recipe);
  } catch (error) {
    res.error(error, error.message);
  }
};

const remove = async (req, res) => {
  try {
    await deleteRecipe(req.params.id);
    res.success(null, "레시피가 삭제되었습니다.");
  } catch (error) {
    res.error(error, error.message);
  }
};

module.exports = { create, getAllRecipe, getRecipe, update, remove };
