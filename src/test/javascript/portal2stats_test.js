var fs = require('fs');
var sys = require('sys');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../../main/javascript/tf2stats.js', 'utf8');

eval(tf2status_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../resources/gutomaia-portal2.xml');

var statsClient = new StatsClient();

var stats = statsClient.getStats('gutomaia', 'portal2', tf2status_xml);

assert.equal(3, stats.visibilityState);
assert.equal("Portal2", stats.gameFriendlyName);