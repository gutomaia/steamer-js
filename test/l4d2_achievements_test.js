var fs = require('fs');
var sys = require('util');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../src/tf2stats.js', 'utf8');

eval(tf2status_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-l4d2.xml');

var statsClient = new StatsClient();

var achievements = statsClient.getAchievements('gutomaia', 'l4d2', tf2status_xml);

assert.notEqual(null, achievements);
assert.equal(67, achievements.length);

var achievement = achievements[0];

assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/8d94a8ffcb20fd11de547a6972bcef319fd93bf6.jpg", achievement.iconClosed);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/19c4af0f9bb24b719a086cbd3b63961d8348bf2b.jpg", achievement.iconOpen);
assert.equal("ACID REFLEX", achievement.name);
assert.equal("ach_kill_spitter_fast", achievement.apiname);
assert.equal("Kill a Spitter before she is able to spit.", achievement.description);
assert.notEqual(null, achievement.timestamp);
assert.equal(1292701736000, achievement.timestamp);

achievement = achievements[1];

assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/b1b772b233b812fd410aee1f175f8b1cb4fe4e43.jpg", achievement.iconClosed);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/1921292f1593086aa0dc7d29124e4c0c1119e084.jpg", achievement.iconOpen);
assert.equal("CRASS MENAGERIE", achievement.name);
assert.equal("ach_kill_every_uncommon_infected", achievement.apiname);
assert.equal("Kill one of each Uncommon Infected.", achievement.description);
assert.equal(1292451219000, achievement.timestamp);

achievement = achievements[2];

assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/b65a6518c0680448e996e2190d1ed6b00ad14935.jpg", achievement.iconClosed);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/95bb3011848b129b4b7483017a970700a0a22bd1.jpg", achievement.iconOpen);
assert.equal("A RIDE DENIED", achievement.name);
assert.equal("ach_save_player_from_jockey_fast", achievement.apiname);
assert.equal("Kill a Jockey within 2 seconds of it jumping on a Survivor.", achievement.description);

achievement = achievements[3];
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/4eb2b093ce1dd442da4a62c9a0659602fbfc0d1e.jpg", achievement.iconClosed);
assert.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/4fc103dcb52ccc748b5bdea66924d1bf5c9e0705.jpg", achievement.iconOpen);
assert.equal("ARMORY OF ONE", achievement.name);
assert.equal("ach_deploy_ammo_upgrade", achievement.apiname);
assert.equal("Deploy an ammo upgrade and have your team use it.", achievement.description);