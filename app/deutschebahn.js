var myArgs = process.argv.slice(2);
var fs = require('fs');
var path = require('path');
// https://data.deutschebahn.com/dataset/data-stationsdaten/resource/4d01a8e8-33c5-44b9-9260-e7c80c8ac370
var filePath = path.join(__dirname, 'data/DBSuS-Uebersicht_Bahnhoefe-Stand2019-03.csv');
var f = fs.readFileSync(filePath, {encoding: 'utf-8'});

// Split on row
f = f.split("\r\n");

// Get first row for column headers
headers = f.shift().split(";");

var json = [];    
f.forEach(function(d){
    // Loop through each row
    tmp = {}
    row = d.split(";")
    for(var i = 0; i < headers.length; i++){
        tmp[headers[i]] = row[i];
    }
    // Add object to list
    json.push(tmp);
});

var data = {};
var locations = [];
json.forEach(function(location) {
	if (myArgs[1]) {
		if (String(location['Bf DS 100 Abk.']).trim().startsWith(myArgs[1])) {
			locations.push(location);
		}
	}
	else if (myArgs[0]) {
		if (String(location['Bundesland']).trim() == myArgs[0]) {
			data[String(location['Bf DS 100 Abk.']).trim()] = null;
		}
	}
	else {
		data[String(location['Bundesland']).trim()] = null;
	}
});
if (locations.length) {
	console.log(locations);
}
else {
	console.log(Object.keys(data).sort());
}