const express = require("express");
const connectDB = require("./config/connectDB");
//require the router
const authRouter = require("./routes/auth");
const app = express();
//middleware
app.use(express.json());
connectDB();
//use routes
app.use('./api/auth',authRouter)
const port = process.env.PORT || 5000;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`server is runnig on port ${port}`);
});
