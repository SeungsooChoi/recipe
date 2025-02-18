const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");

const create = async (req, res) => {
  try {
    const category = await createCategory(req.body);
    res.success(category);
  } catch (error) {
    res.error(error, error.message);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.success(categories);
  } catch (error) {
    res.error(error, error.message);
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await getCategoryById(req.params.id);
    if (!category) {
      return res.error(null, "카테고리가 없습니다.");
    }
    res.success(category);
  } catch (error) {
    res.error(error, error.message);
  }
};

const update = async (req, res) => {
  try {
    const category = await updateCategory(req.params.id, req.body);
    res.success(category);
  } catch (error) {
    res.error(error, error.message);
  }
};

const remove = async (req, res) => {
  try {
    await deleteCategory(req.params.id);
    res.success(null, "레시피가 삭제되었습니다.");
  } catch (error) {
    res.error(error, error.message);
  }
};

module.exports = { create, getCategories, getCategory, update, remove };
