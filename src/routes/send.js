/*
 * © 2018 Tal Globus. All Rights Reserved.
 */
"use strict";

const express = require('express');
const router = express.Router();
const datastore = require('../datastore');
const rendErr = require('../rendErr');

router.get('/', function(req, res, next) {
	let data = {
		deviceKey: req.params.get('deviceKey') || null,
		coordinates: req.params.get('coordinates') || null,
		dataKey: req.params.get('dataKey') || null,
		dataValue: req.params.get('dataValue') || null,
		time: req.params.get('time') || null
	};

	if (data.deviceKey === null || data.coordinates === null || data.dataKey === null || data.dataValue === null
		|| data.time === null) {
		const err = new Error("Parameters 'deviceKey', 'coordinates', 'dataKey', 'dataValue', and 'time' must be " +
			"provided, where deviceKey is the globally unique key assigned to the device, coordinates is a " +
			"comma-separated pair of GPS coordinates for the device as '<N>,<E>' where coordinates can have " +
			"resolution as high as 0.0000001 degrees, dataKey is the name of the data element being submitted, " +
			"dataValue is the numerical value of the data element being submitted, and time is the millisecond-" +
			"resolution timestamp of the data being submitted");
		err.status = 400;
		rendErr(err, req, res);
	} else {
		datastore.add(data);
		res.status(200).send('Data accepted');
	}
});

module.exports = router;
