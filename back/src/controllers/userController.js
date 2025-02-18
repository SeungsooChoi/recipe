const { getAllUsers, getUserById } = require("../services/userService");

// 사용자 목록 반환
const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.success(users);
  } catch (error) {
    res.error(error, error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const users = await getUserById(req);
    res.success(users);
  } catch (error) {
    res.error(error, error.message);
  }
};

module.exports = { getUsers, getUser };
