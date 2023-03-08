const jwt = require("jsonwebtoken");

const User = require("../models/User");

//get user ny token
const getUserByToken = async (token) => {   

  if(!token){
    return res.status(401).json({message: "Acesso negado."})
  }
  
  const decoded = jwt.verify(token, "nossosecret");
  
  const { id } = decoded;

  const user = await User.findOne({ _id: id });

  return user;
};

module.exports = getUserByToken;