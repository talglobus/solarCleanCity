/*
 * © 2018 Tal Globus. All Rights Reserved.
 */
"use strict";

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'solarCleanCity' });
});

module.exports = router;
