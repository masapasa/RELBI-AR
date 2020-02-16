var myArgs = process.argv.slice(2);
var fs = require("fs");
var path = require('path');
//  // http://points.heychimpy.com/
var filePath = path.join(__dirname, 'data/points.heychimpy.json');
var contents = fs.readFileSync(filePath);
var jsonContent = JSON.parse(contents);
var data = {};
var locations = [];
jsonContent.locations.forEach(function(location) {
	if (myArgs[1]) {
		if (String(location.city).trim().startsWith(myArgs[1])) {
			location.distance = (myArgs[2] && myArgs[3]) ? calculateDistance(myArgs[2], myArgs[3], location.latitude, location.longitude, 'K') : null;
			locations.push(location);
		}
	}
	else if (myArgs[0]) {
		if (String(location.region).trim() == myArgs[0]) {
			data[String(location.city).trim()] = null;
		}
	}
	else {
		data[String(location.region).trim()] = null;
	}
});
if (locations.length) {
	var center = 'Drivery,Berlin';
	if ((myArgs[2] && myArgs[3])) {
		locations.sort((a, b) => a.distance > b.distance);
		center = myArgs[2] +','+ myArgs[3];
	}
	//console.log(locations);
	var markers = '';
	locations.forEach(function(location) {
		markers += '&markers=color:blue%7Clabel:S%7C'+ location.latitude +','+ location.longitude
	});
	console.log('https://maps.googleapis.com/maps/api/staticmap?center='+ center +'&zoom=13&size=600x300&maptype=roadmap'+ markers +'&key=');
}
else {
	console.log(Object.keys(data).sort());
}

function calculateDistance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var radlon1 = Math.PI * lon1/180
	var radlon2 = Math.PI * lon2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}