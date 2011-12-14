var fs = require('fs');
var sys = require('sys');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../../main/javascript/tf2stats.js', 'utf8');

eval(tf2status_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../resources/gutomaia-l4d2.xml');

var statsClient = new StatsClient();

var achievements = statsClient.getAchievements('gutomaia', 'l4d2', tf2status_xml);

