const { database } = require("pg/lib/defaults");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
      },
      species: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
      },
      origin: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        isUrl: true,
      },
    },
    { timestamps: false }
  );
};
