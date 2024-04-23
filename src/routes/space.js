const server = require("express").Router();
const SpaceController = require("../controllers/space");

server.get("/", (req,res) => {
  SpaceController.getSpace().then((r) => res.send(r));
});

module.exports = server;