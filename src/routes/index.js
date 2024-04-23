const { Router } = require('express');
const router = Router();

router.use("/", require("./User.js"));
router.use("/space", require("./space.js"));

module.exports = router;
