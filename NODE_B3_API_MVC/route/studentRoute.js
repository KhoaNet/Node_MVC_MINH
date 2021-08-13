 const express = require('express')
 const router = express.Router();

const studentCtrl = require('../controller/studentCtrl');

 router.get("/getData",studentCtrl.getData);

 module.exports = router;
