const { getAllUsers, createNewUser } = require("../services/userService");

// 사용자 목록 반환
const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// 사용자 생성
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await createNewUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = { getUsers, createUser };
