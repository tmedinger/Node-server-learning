const express = require("express");
const router = express.Router();
const sequelize = require("../db");
const User = sequelize.import("../models/user");
const jwt = require("jsonwebtoken");

router.post("/createuser", function (req, res) {
    let username = req.body.user.username;
    let pass = req.body.user.password;

    User.create({
        username: username,
        passwordhash: pass
    })
    .then(
        function createSuccess(user){
            res.json({
                user: user,
                message: "created"
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;