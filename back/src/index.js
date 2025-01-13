const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// JSON 요청 본문을 파싱하기 위한 미들웨어 설정
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false })); //false : querystring 모듈 사용

// API 경로에 라우터 연결
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// middleware
app.use(errorHandler);

// 서버 시작 및 포트 설정
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
