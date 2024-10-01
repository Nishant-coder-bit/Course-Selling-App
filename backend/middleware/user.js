
const {JWT_USER_PASSWORD} = require("../config.js");
const jwt = require("jsonwebtoken");
function userMidlleware(req, res, next) {
   const token = req.headers.token;
   const decoded = jwt.verify(token, JWT_USER_PASSWORD);
   console.log("inside user middleware decoded",decoded);  
   if (decoded) {
    req.userId = decoded._id;
    console.log("inside user middleware",req.userId);
    next()
} else {
    res.status(403).json({
        message: "You are not signed in"
    })
}
};

module.exports = userMidlleware;