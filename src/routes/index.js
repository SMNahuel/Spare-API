const { Router } = require('express');
const router = Router();

router.use("/space", require("./space.js"));


module.exports = router;
