

function userMidlleware(req, res, next) {
  console.log("user middleware");
    next();
};

module.exports = userMidlleware;