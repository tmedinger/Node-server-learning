module.exports = function (sequelize, DataTypes) {
    return sequelize.define("use", {
        username: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    });
};
