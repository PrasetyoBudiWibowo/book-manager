const express = require("express");
const app = express();
const sequelize = require("./config/database");
const logger = require("./middleware/logger");
const authRoutes = require("./routes/auth.routes");


const bookRoutes = require("./routes/book.routes");

app.use(express.json());
app.use(logger);
app.use("/api", bookRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("API Book Manager jalan");
});

const PORT = 3000;

sequelize.sync().then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database gagal connect:", err);
  });