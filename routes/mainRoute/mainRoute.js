const express = require('express');
const router = express.Router();
const {homeController} = require("../../controllers/homeController/homeController");

router.route('/').get(homeController);

module.exports = router;