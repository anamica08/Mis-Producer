
const express = require('express');
const router   = express.Router();
const msg = require("../controllers/publishMessageController");


router.post('/publish',msg.publishMessage);


module.exports = router;