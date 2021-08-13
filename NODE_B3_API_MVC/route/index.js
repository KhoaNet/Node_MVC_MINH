const express = require('express')
const router = express.Router();

const ctrl = require('../controller/index');

router.get("/",ctrl.viewHomePage);

router.get("/intro",ctrl.viewHomeIntro);

module.exports = router;
