const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("space", {
    name: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    wifi: {
      type: DataTypes.BOOLEAN,
    },
    room: {
      type: DataTypes.INTEGER,
    },
    pool: {
      type: DataTypes.INTEGER,
    },
    bathroom: {
      type: DataTypes.INTEGER,
    },
    kitchen: {
      type: DataTypes.BOOLEAN,
    },
    grill: {
      type: DataTypes.BOOLEAN,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    priceInsurance: {
      type: DataTypes.FLOAT,
    },
    paymentMethod:{
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    }
  });
};
