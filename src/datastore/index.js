/*
 * © 2018 Tal Globus. All Rights Reserved.
 */
"use strict";

let data = {};		// Data store, indexed with `dataKey`, valued with an array of objects each with all 5 inputs

const add = ({deviceKey, coordinates, dataKey, dataValue, time}) => {
	if (typeof deviceKey === "undefined" || deviceKey === null || typeof coordinates === "undefined" || coordinates
		=== null || typeof dataKey === "undefined" || dataKey === null || typeof dataValue === "undefined" || dataValue
		=== null || typeof time === "undefined" || time === null) {
		const err = Error("Input must be an object of the form `{deviceKey, coordinates, dataKey, dataValue, time}`");
		err.name = "InvalidArgumentError";
		throw err;
	}

	if (typeof data[dataKey] === "undefined") {
		data[dataKey] = [];
	}

	data[dataKey].push({deviceKey, coordinates, dataKey, dataValue, time});
};

const getByDevice = deviceKey =>
	[].concat([], ...Object.values(data)).filter(dataElem => dataElem.deviceKey === deviceKey);

const getByKey = dataKey => {
	if (typeof data[dataKey] === "undefined") return [];
	else return data[dataKey];
};

const clear = () => (data = {});

module.exports = {
	add, getByDevice, getByKey, clear
};