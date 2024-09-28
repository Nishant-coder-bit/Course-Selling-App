const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
})

module.exports = mongoose.model("Admin", adminSchema)