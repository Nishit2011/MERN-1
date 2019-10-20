const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //fetching the token from the header of the api
  const token = req.header("x-auth-token");

  //if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Verify a token

  try {
    const decoded = jwt.verify(token, config.get("jwtSecrets"));
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
