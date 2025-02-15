const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const errorHandler = require("./middlewares/errorHandler");
const commonResponse = require("./middlewares/commonResponse");

const app = express();

// CORS 설정 (모든 도메인 허용)
app.use(
  cors({
    origin: "*", // 모든 도메인 허용
    credentials: true, // 쿠키 허용 (필요 없는 경우 생략 가능)
  })
);

// 세션 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET, // 세션 암호화 키
    resave: false, // 세션 강제 저장 여부
    saveUninitialized: false, // 초기화되지 않은 세션 저장 안 함
    cookie: {
      secure: false, // HTTPS에서만 쿠키 전송 // 추후 true로 변경할 것
      httpOnly: true, // JS로 쿠키 접근 방지
      maxAge: 1000 * 60 * 30, // 쿠키 유효 기간 (30분)
      sameSite: "lax", // CSRF 방지용 (strict는 일부 요청 제한)
    },
  })
);

// common response
app.use(commonResponse);

// JSON 요청 본문을 파싱하기 위한 미들웨어 설정
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false })); //false : querystring 모듈 사용

// API 경로에 라우터 연결
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/categories", categoryRoutes);

// middleware
app.use(errorHandler);

// 서버 시작 및 포트 설정
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
