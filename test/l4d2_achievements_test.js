var fs = require('fs');
var sys = require('util');

var assert = require('assert');

var tf2status_function = fs.readFileSync(__dirname + '/../src/tf2stats.js', 'utf8');

eval(tf2status_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-l4d2.xml');

var statsClient = new StatsClient();

var achievements = statsClient.getAchievements('gutomaia', 'l4d2', tf2status_xml);

exports.testNumberOfAchievements = function(test){
    test.notEqual(null, achievements);
    test.equal(67, achievements.length);
    test.done();
}

exports.testAcidReflexAchievementIconClosed = function(test){
    var achievement = achievements[0];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/8d94a8ffcb20fd11de547a6972bcef319fd93bf6.jpg", achievement.iconClosed);
    test.done();
}

exports.testAcidReflexAchievementIconOpen = function(test){
    var achievement = achievements[0];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/19c4af0f9bb24b719a086cbd3b63961d8348bf2b.jpg", achievement.iconOpen);
    test.done();
}

exports.testAcidReflexAchievementName = function(test){
    var achievement = achievements[0];
    test.equal("ACID REFLEX", achievement.name);
    test.done();
}

exports.testAcidReflexAchievementApiname = function(test){
    var achievement = achievements[0];
    test.equal("ach_kill_spitter_fast", achievement.apiname);
    test.done();
}

exports.testAcidReflexDescription = function(test){
    var achievement = achievements[0];
    test.equal("Kill a Spitter before she is able to spit.", achievement.description);
    test.done();
}

exports.testAcidReflexTimestamp = function(test){
    var achievement = achievements[0];
    test.notEqual(null, achievement.timestamp);
    test.equal(1292701736000, achievement.timestamp);
    test.done();
}

exports.testCrassMenagerieIconOpen = function(test){
    var achievement = achievements[1];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/b1b772b233b812fd410aee1f175f8b1cb4fe4e43.jpg", achievement.iconClosed);
    test.done();
}

exports.testCrassMenagerieIconClosed = function(test){
    var achievement = achievements[1];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/b1b772b233b812fd410aee1f175f8b1cb4fe4e43.jpg", achievement.iconClosed);
    test.done();
}

exports.testCrassMenagerieIconOpen = function(test){
    var achievement = achievements[1];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/1921292f1593086aa0dc7d29124e4c0c1119e084.jpg", achievement.iconOpen);
    test.done();
}

exports.testCrassMenagerieIconClosed = function(test){
    var achievement = achievements[1];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/b1b772b233b812fd410aee1f175f8b1cb4fe4e43.jpg", achievement.iconClosed);
    test.done();
}

exports.testCrassMenagerieName = function(test){
    var achievement = achievements[1];
    test.equal("CRASS MENAGERIE", achievement.name);
    test.done();
}

exports.testCrassMenagerieApiname = function(test){
    var achievement = achievements[1];
    test.equal("ach_kill_every_uncommon_infected", achievement.apiname);
    test.done();
}

exports.testCrassMenagerieDescription = function(test){
    var achievement = achievements[1];
    test.equal("Kill one of each Uncommon Infected.", achievement.description);
    test.done();
}

exports.testCrassMenagerieTimestamp = function(test){
    var achievement = achievements[1];
    test.notEqual(null, achievement.timestamp);
    test.equal(1292451219000, achievement.timestamp);
    test.done();
}

exports.testARideDeniedIconClosed = function(test){
    var achievement = achievements[2];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/b65a6518c0680448e996e2190d1ed6b00ad14935.jpg", achievement.iconClosed);
    test.done();
}

var achievement = achievements[2];

exports.testARideDeniedIconOpen = function(test){
    var achievement = achievements[2];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/b65a6518c0680448e996e2190d1ed6b00ad14935.jpg", achievement.iconClosed);
    test.done();
}

exports.testARideDeniedIconClosed = function(test){
    var achievement = achievements[2];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/95bb3011848b129b4b7483017a970700a0a22bd1.jpg", achievement.iconOpen);
    test.done();
}

exports.testARideDeniedName = function(test){
    var achievement = achievements[2];
    test.equal("A RIDE DENIED", achievement.name);
    test.done();
}

exports.testARideDeniedApiname = function(test){
    var achievement = achievements[2];
    test.equal("ach_save_player_from_jockey_fast", achievement.apiname);
    test.done();
}

exports.testARideDeniedDescription = function(test){
    var achievement = achievements[2];
    test.equal("Kill a Jockey within 2 seconds of it jumping on a Survivor.", achievement.description);
    test.done();
}

exports.testArmoryOfOneIconClosed = function(test){
    var achievement = achievements[3];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/4eb2b093ce1dd442da4a62c9a0659602fbfc0d1e.jpg", achievement.iconClosed);
    test.done();
}

exports.testArmoryOfOneIconOpen = function(test){
    var achievement = achievements[3];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/4fc103dcb52ccc748b5bdea66924d1bf5c9e0705.jpg", achievement.iconOpen);
    test.done();
}

exports.testArmoryOfOneName = function(test){
    var achievement = achievements[3];
    test.equal("ARMORY OF ONE", achievement.name);
    test.done();
}

exports.testArmoryOfOneApiname = function(test){
    var achievement = achievements[3];
    test.equal("ach_deploy_ammo_upgrade", achievement.apiname);
    test.done();
}

exports.testArmoryOfOneDescription = function(test){
    var achievement = achievements[3];
    test.equal("Deploy an ammo upgrade and have your team use it.", achievement.description);
    test.done();
}