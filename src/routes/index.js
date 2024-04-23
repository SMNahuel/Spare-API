const { Router } = require('express');
const router = Router();

router.use("/", require("./User.js"));


module.exports = router;