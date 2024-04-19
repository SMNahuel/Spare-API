const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.INTEGER,
      unique: {
        args: true,
        msg: "DNI already in use!",
      },
    },
    dateBorth: {
      type: DataTypes.DATE,
    },
    paymenthMethod: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
  });
};
