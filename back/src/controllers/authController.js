const { loginUser, registerUser } = require("../services/authService");

// 로그인 처리
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.json(user);
  } catch (error) {
    res.status(400).send("Invalid credentials");
  }
};

// 회원가입 처리
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await registerUser(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = { login, register };
