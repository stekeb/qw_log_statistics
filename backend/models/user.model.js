const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class User extends Model {}

User.init(
  {
    userName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    eMail: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
