const express = require("express");
const app = express();
const user = require("./routes/User");
const admin = require("./routes/Admin");
const course = require("./routes/Course");
const User = require("./models/User");
const Admin = require("./models/Admin");
const Course = require("./models/Course");
const Purchase = require("./models/Purchase");
const PORT = 3000;

app.use(express.json());
const mongoose = require("mongoose");

app.use('/user', user);

app.use('/admin', admin);

app.use('/course', course);



async function main() {

    await mongoose.connect("mongodb+srv://nishantanindian:12345@cluster0.me5avod.mongodb.net/coursera");
    console.log("database connected");
    app.listen(PORT, () => {
        console.log("app is listening on port: ", `${PORT}`)
    });
}

main();
