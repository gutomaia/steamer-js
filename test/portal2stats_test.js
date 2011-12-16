var fs = require('fs');
var sys = require('sys');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../src/tf2stats.js', 'utf8');

eval(tf2status_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-portal2.xml');

var statsClient = new StatsClient();

var stats = statsClient.getStats('gutomaia', 'portal2', tf2status_xml);

assert.equal(3, stats.visibilityState);
assert.equal("Portal2", stats.gameFriendlyName);
assert.equal("Portal 2", stats.gameName);
assert.equal("Portal 2", stats.gameName);
assert.equal("http://store.steampowered.com/app/620", stats.gameLink);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/620/2e478fc6874d06ae5baf0d147f6f21203291aa02.jpg", stats.gameIcon);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/620/d2a1119ddc202fab81d9b87048f495cbd6377502.jpg", stats.logo);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/620/d2a1119ddc202fab81d9b87048f495cbd6377502_thumb.jpg", stats.logoSmall);
assert.equal(76561197985077150, stats.steamID64);
assert.equal("gutomaia", stats.playerCustomURL);
