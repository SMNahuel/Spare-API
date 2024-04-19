const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Photo", {
    url: {
      type: DataTypes.STRING,
    },
  });
};
