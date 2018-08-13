/*
 * © 2018 Tal Globus. All Rights Reserved.
 */
"use strict";

const express = require('express');
const router = express.Router();
const datastore = require('../datastore');
const rendErr = require('../rendErr');

router.get('/device/:device', (req, res, next) => {
	res.json({
		time: Date.now(),
		data: datastore.getByDevice(req.params.device)
	});
});

router.get('/metric/:metric', (req, res, next) => {
	res.json({
		time: Date.now(),
		data: datastore.getByKey(req.params.metric)
	});
});

router.get('/metric', (req, res, next) => {
	const err = new Error("Metric name must be provided as /receive/metric/<metric-name>");
	err.status = 400;
	rendErr(err, req, res);
});

router.get('/device', (req, res, next) => {
	const err = new Error("Device key must be provided as /receive/device/<device-key>");
	err.status = 400;
	rendErr(err, req, res);
});

module.exports = router;
