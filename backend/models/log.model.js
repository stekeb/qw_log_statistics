const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");
const User = require("./user.model");

class Log extends Model {}

Log.init(
  {
    nmyName: {
      type: DataTypes.STRING,
    },
    ownLG: {
      type: DataTypes.BIGINT,
    },
    ownRL: {
      type: DataTypes.BIGINT,
    },
    ownMH: {
      type: DataTypes.BIGINT,
    },
    ownFrags: {
      type: DataTypes.BIGINT,
    },
    nmyLG: {
      type: DataTypes.BIGINT,
    },
    nmyRL: {
      type: DataTypes.BIGINT,
    },
    nmyMH: {
      type: DataTypes.BIGINT,
    },
    nmyFrags: {
      type: DataTypes.BIGINT,
    },
    map: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Log",
  }
);

User.hasMany(Log);
Log.belongsTo(User);

module.exports = Log;
