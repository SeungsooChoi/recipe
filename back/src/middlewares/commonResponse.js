const commonResponse = (req, res, next) => {
  res.success = (data, message = "ok") => {
    res.json({
      success: true,
      data,
      message,
      error: null,
    });
  };

  res.error = (error, message = "fail") => {
    res.json({
      success: false,
      data: null,
      message,
      error,
    });
  };

  next();
};

module.exports = commonResponse;
