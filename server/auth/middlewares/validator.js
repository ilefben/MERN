const {body,validationResult}=require("express-validator");
const registerRules = () => [
  body("name", "Name is required").notEmpty(),
  body("lastName", "Last Name is required").notEmpty(),
  body("email", "email is required").isEmail(),
  body("password", "password must contain 8 caracters").isLength({
    min:8,
    max:20,
  }),
];
const loginRules = () => [
  body("email", "email is required").isEmail(),
  body("password", "password must contain 8 caracters").isLength({
    min: 8,
    max: 20,
  }),
];
const validator=(req,res,next)=>{
    const errors=validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).send({errors:errors.array().map(el=>({
            msg:el.msg,
        }))})
    }
    next();
};
module.exports={validator,registerRules,loginRules}