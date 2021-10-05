const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");
const User = require("./user.model");

class Name extends Model {}

Name.init(
  {
    playerName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Name",
  }
);

User.hasMany(Name);
Name.belongsTo(User);

module.exports = Name;
