const express = require("express");

const app = express();

const port = process.env.port || 5000;

app.listen(port, () => `Server is running on ${port}`);

app.get("/", (req, res) => {
  res.json({ message: "Server is up!" }).status(200);
});
