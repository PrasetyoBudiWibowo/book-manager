const jwt = require("jsonwebtoken");

// LOGIN DUMMY
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123456") {
    const token = jwt.sign(
      { username: "admin" },
      "secretKey",
      { expiresIn: "1h" }
    );

    return res.json({
      status: true,
      message: "Login berhasil",
      token
    });
  }

  return res.status(401).json({
    status: false,
    message: "Username atau password salah"
  });
};