const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("PaymentMethod", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
