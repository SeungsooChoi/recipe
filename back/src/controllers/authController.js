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
    // 중복 확인
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.error({ code: 400, message: null }, "이미 존재하는 이메일입니다.");
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 생성
    const user = await prisma.user.create({
      data: { id, password: hashedPassword },
    });

    res.success(user, "ok");
  } catch (err) {
    console.error(err);
    res.error({ code: 500, message: err.message }, "서버 오류입니다.");
  }
};

module.exports = { login, register };
