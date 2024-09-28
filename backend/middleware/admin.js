



function adminMidlleware(req, res, next) {
    `<h1>admin middleware</h1>`
    next();
}
module.exports = adminMidlleware;