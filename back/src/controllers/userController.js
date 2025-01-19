const { getAllUsers, getUserById } = require("../services/userService");

// 사용자 목록 반환
const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const getUser = async (req, res) => {
  try {
    const users = await getUserById(req);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = { getUsers, getUser };
