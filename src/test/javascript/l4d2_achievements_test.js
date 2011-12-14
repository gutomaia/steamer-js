var fs = require('fs');
var sys = require('sys');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../../main/javascript/tf2stats.js', 'utf8');

eval(tf2status_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../resources/gutomaia-l4d2.xml');

var statsClient = new StatsClient();

var achievements = statsClient.getAchievements('gutomaia', 'l4d2', tf2status_xml);

assert.notEqual(null, achievements);
assert.equal(67, achievements.length);

var achievement = achievements[0];

assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/8d94a8ffcb20fd11de547a6972bcef319fd93bf6.jpg", achievement.iconClosed);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/19c4af0f9bb24b719a086cbd3b63961d8348bf2b.jpg", achievement.iconOpen);
assert.equal("ACID REFLEX", achievement.name);



