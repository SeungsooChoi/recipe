const {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../services/reviewService");

const create = async (req, res) => {
  try {
    const review = await createReview(req.body);
    res.success(null, review);
  } catch (error) {
    res.error(error, error.message);
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await getAllReviews();
    res.success(null, reviews);
  } catch (error) {
    res.error(error, error.message);
  }
};

const getReview = async (req, res) => {
  try {
    const review = await getReviewById(req.params.id);
    if (!category) {
      return res.error(err, "카테고리가 없습니다.");
    }
    res.success(null, review);
  } catch (error) {
    res.error(error, error.message);
  }
};

const update = async (req, res) => {
  try {
    const review = await updateReview(req.params.id, req.body);
    res.success(null, review);
  } catch (error) {
    res.error(error, error.message);
  }
};

const remove = async (req, res) => {
  try {
    await deleteReview(req.params.id);
    res.success(null, "레시피가 삭제되었습니다.");
  } catch (error) {
    res.error(error, error.message);
  }
};

module.exports = { create, getReviews, getReview, update, remove };
