require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http").Server(app);
const test = require("./controllers/testcontroller");
const user = require("./controllers/usercontroller")
const sequelize = require("./db");
const bodyParser = require("body-parser");


sequelize.sync();

app.use(bodyParser.json());
app.use(require("./middleware/headers"));
app.use("/test", test);
app.use("/api/user", user);
app.use("/api/test", function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

http.listen(3000, function(){
    console.log("Yay the server works!");
})