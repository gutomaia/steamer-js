var fs = require('fs');
var sys = require('sys');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../../main/javascript/tf2stats.js', 'utf8');

eval(tf2status_function);

var tf2status_xml = fs.readFileSync(__dirname + '/../resources/gutomaia-tf2.xml');

var statsClient = new StatsClient();

var stats = statsClient.getStats('gutomaia', 'tf2', tf2status_xml);

assert.equal(3, stats.visibilityState);
assert.equal("TF2", stats.gameFriendlyName);
assert.equal("Team Fortress 2", stats.gameName);
assert.equal("http://store.steampowered.com/app/440", stats.gameLink);
