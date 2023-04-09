const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true,
        unique: true,
        allowNull: false,
        max: 35,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 6,
        max: 10,
        isAlphanumeric: true,
      },
    },
    { timestamps: false }
  );
};
