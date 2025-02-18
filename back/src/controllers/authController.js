const { loginUser, registerUser } = require("../services/authService");

// 로그인 처리
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password, req.session);
    res.success(result);
  } catch (error) {
    res.error(error, error.message);
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.error(err, "Logout failed!");
    }
    res.clearCookie("connect.sid");
    res.success(null, "Logged out successfully!");
  });
};

// 회원가입 처리
const register = async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.success(result);
  } catch (error) {
    res.error(error, error.message);
  }
};

module.exports = { login, logout, register };
