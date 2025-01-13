const {
  getAllUsers,
  getUserById,
  createNewUser,
} = require("../services/userService");

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

// 사용자 생성
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await createNewUser(name, email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = { getUsers, getUser, createUser };
