const {
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../services/recipeService");

const create = async (req, res) => {
  try {
    const recipe = await createRecipe(req.body);
    res.success(null, recipe);
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
    res.success(null, recipe);
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

module.exports = { create, getRecipe, update, remove };
