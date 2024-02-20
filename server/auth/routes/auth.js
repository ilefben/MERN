//require router from express
const router = require("express").Router();
//require bcrypt
const bcrypt = require("bcrypt");
//require the json web token
const jwt = require("jsonwebtoken");
//require the user schema
const User = require("../models/User");
const isAuth = require("../middlewares/isAuth");
const {
  validator,
  registerRules,
  loginRules,
} = require("../middlewares/validator");
//@route POST api/aut/register
//@des register new user
//@access public
router.post("/register", registerRules(), validator, async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    //simple validation
    /*if (!name || !lastName || !email || !password) {
      return res.status(400).json({ msg: "please enter all fields !" });
    }*/
    //check existing user
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    //create new user
    user = new User({ name, lastName, email, password });
    //create salt and hach
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    //save the user
    await user.save();
    //sign user
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, process.env.secret, {
      expiresIn: "7 days",
    });
    res.status(200).send({ msg: "User registred with success", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});
//@route POST api/aut/login
//@des login user
//@access public
router.post("/login", loginRules, validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    //simple validation
    /* if (!email || !password) {
      return res.status(400).send({ msg: "please enter all fields" });
    }*/
    //check for exists
    let user = await User;
    if (!user) {
      return res.status(400).send({ msg: "bad credentials!email" });
    }
    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "bad cridentials!password" });
    }
    //sign user
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, process.env.secret, {
      expiresIn: "7 days",
    });
    res.send({ msg: "logged in with success", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});
//@route GET api/aut/user
//@des GET athentified user
//@access private
router.get("/user",isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
