function errorHandler(err, req, res, next) {
  // 커스텀 에러 클래스에서 statusCode를 가져오거나 기본값 500 사용
  const statusCode = err.statusCode || 500;

  // 개발 환경
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
    return res.status(statusCode).json({
      error: {
        message: err.message,
        stack: err.stack,
      },
    });
  } else {
    // 운영 환경
    // statusCode가 500이 아닐 경우는 구체적인 에러 메시지 전달
    return res.status(statusCode).json({
      error: err.message || "Internal Server Error",
    });
  }
}

module.exports = errorHandler;
