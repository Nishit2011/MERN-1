const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
const port = process.env.port || 5000;

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/users", require("./routes/api/users"));

app.listen(port, () => `Server is running on ${port}`);

app.get("/", (req, res) => {
  res.json({ message: "Server is up!" }).status(200);
});
