
// Define the schmea of User 
const mongoose = require("mongoose");   

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
})



// Create a model
module.exports = mongoose.model("User", userSchema);