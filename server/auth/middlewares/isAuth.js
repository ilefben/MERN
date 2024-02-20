const jwt = require("jsonwebtoken");
const User = require("../models/User");
const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["x-auth-token"];
    //check for token
    if (!token)
      return res.status(401).send({ msg: "no token ,authorization denied" });
    const decoded = await jwt.verify(token, process.env.secret);
    //add user from payload
    const user = await User.findById(decoded.id);
    //check for user
    if (!user) {
      return res.status(401).send({ msg: "authorization denied" });
    }
    //create user
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ msg: "token is not valid" });
  }
};
module.exports=isAuth;