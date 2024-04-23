const { Space } = require("../db.js");

module.exports = {
  getSpace: function () {
    return Space.findAll();
  },
};
