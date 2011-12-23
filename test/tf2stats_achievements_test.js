var fs = require('fs');
var sys = require('util');

var assert = require('assert');

var stats_function = fs.readFileSync(__dirname + '/../src/stats.js', 'utf8');

eval(stats_function);

var tf2_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-tf2.xml');

var statsClient = new StatsClient();

var achievements = statsClient.getAchievements('gutomaia', 'tf2', tf2_xml);

exports.testNumberOfAchievements = function(test){
    test.notEqual(null, achievements);
    test.equal(381, achievements.length);
    test.done();
}

exports.testHeadOfTheClassIconClosed = function(test) {
    var achievement = achievements[0];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everyclass.jpg", achievement.iconClosed);
    test.done();
}

exports.testHeadOfTheClassIconOpen = function(test) {
    var achievement = achievements[0];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everyclass_bw.jpg", achievement.iconOpen);
    test.done();
}

exports.testHeadOfTheClassName = function(test) {
    var achievement = achievements[0];
    test.equal("Head of the Class", achievement.name);
    test.done();
}

exports.testHeadOfTheClassApiname = function(test) {
    var achievement = achievements[0];
    test.equal("tf_play_game_everyclass", achievement.apiname);
    test.done();
}

exports.testHeadOfTheClassDescription = function(test) {
    var achievement = achievements[0];
    test.equal("Play a complete round with every class.", achievement.description);
    test.done();
}

/*
    public void testHeadOfTheClassTimeStamp() {
        Achievement achievement = achievements.get(0);
        assertNull(achievement.getTimestamp());
    }

    public void testHeadOfTheClassIsAchieved() {
        Achievement achievement = achievements.get(0);
        assertFalse(achievement.isAchieved());
    }
*/


exports.testWorldTravelerIconClosed = function(test) {
    var achievement = achievements[1];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everymap.jpg", achievement.iconClosed);
    test.done();
}

exports.testWorldTravelerIconOpen = function(test) {
    var achievement = achievements[1];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everymap_bw.jpg", achievement.iconOpen);
    test.done();
}

exports.testWorldTravelerName = function(test) {
    var achievement = achievements[1];
    test.equal("World Traveler", achievement.name);
    test.done();
}

exports.testWorldTravelerApiname = function(test) {
    var achievement = achievements[1];
    test.equal("tf_play_game_everymap", achievement.apiname);
    test.done();
}

exports.testWorldTravelerDescription = function(test) {
    var achievement = achievements[1];
    test.equal("Play a complete game on 2Fort, Dustbowl, Granary, Gravel Pit, Hydro, and Well (CP).", achievement.description);
    test.done();
}


/*
    public void testWorldTravelerTimestamp() {
        Achievement achievement = achievements.get(1);
        assertNull(achievement.getTimestamp());
    }

    public void testWorldTravelerIsAchieved() {
        Achievement achievement = achievements.get(1);
        assertFalse(achievement.isAchieved());
    }
*/


exports.testTeamDoctorIconClosed = function(test) {
    var achievement = achievements[2];
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_get_healpoints.jpg", achievement.iconClosed);
    test.done();
}

/*
    public void testTeamDoctorIconOpen() {
        Achievement achievement = achievements.get(2);
        assertEquals("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_get_healpoints_bw.jpg",
                achievement.getIconOpen());
    }

    public void testTeamDoctorName() {
        Achievement achievement = achievements.get(2);
        assertEquals("Team Doctor", achievement.getName());
    }

    public void testTeamDoctorApiname() {
        Achievement achievement = achievements.get(2);
        assertEquals("tf_get_healpoints", achievement.getApiname());
    }

    public void testTeamDoctorDescription() {
        Achievement achievement = achievements.get(2);
        assertEquals("Accumulate 25000 heal points as a Medic.", achievement.getDescription());
    }

    public void testFlamethrowerIconClosed() {
        Achievement achievement = achievements.get(3);
        assertEquals("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_burn_playersinminimumtime.jpg",
                achievement.getIconClosed());
    }

    public void testFlamethrowerIconOpen() {
        Achievement achievement = achievements.get(3);
        assertEquals("http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_burn_playersinminimumtime_bw.jpg",
                achievement.getIconOpen());
    }

    public void testFlamethrowerName() {
        Achievement achievement = achievements.get(3);
        assertEquals("Flamethrower", achievement.getName());
    }

    public void testFlamethrowerApiname() {
        Achievement achievement = achievements.get(3);
        assertEquals("tf_burn_playersinminimumtime", achievement.getApiname());
    }

    public void testFlamethrowerDescription() {
        Achievement achievement = achievements.get(3);
        assertEquals("Set five enemies on fire in 30 seconds.", achievement.getDescription());
    }


*/