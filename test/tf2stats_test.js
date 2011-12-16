var fs = require('fs');
var sys = require('sys');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../src/tf2stats.js', 'utf8');

eval(tf2status_function);

var tf2status_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-tf2.xml');

var statsClient = new StatsClient();

var stats = statsClient.getStats('gutomaia', 'tf2', tf2status_xml);

assert.equal(3, stats.visibilityState);
assert.equal("TF2", stats.gameFriendlyName);
assert.equal("Team Fortress 2", stats.gameName);
assert.equal("http://store.steampowered.com/app/440", stats.gameLink);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/e3f595a92552da3d664ad00277fad2107345f743.jpg", stats.gameIcon);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg", stats.logo);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8_thumb.jpg", stats.logoSmall);
assert.equal(76561197985077150,stats.steamID64);
assert.equal("gutomaia",stats.playerCustomURL);
