const asyncHandler=require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");
const jwt=require("jsonwebtoken");
const User=require("../models/userModels");

exports.isAuthenticatedUser=asyncHandler(async(req,res,next)=>{
    const {token}=req.cookies;
    console.log(token);

    if(!token){
        return next(new ErrorHandler("Please Login to access this resource",401));
    }

    const decodedData=jwt.verify(token,process.env.JWT_SECRET);

    req.user= await User.findById(decodedData.id)

    next();
});

exports.isAuthenticatedAdmin = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedData.id);

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    if (!user.is_admin) {
      return next(
        new ErrorHandler("You are not authorized to access this resource", 403)
      );
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
});