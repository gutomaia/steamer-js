var fs = require('fs');
var sys = require('util');

var assert = require('assert');

var stats_function = fs.readFileSync(__dirname + '/../src/stats.js', 'utf8');

eval(stats_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-portal2.xml');

var statsClient = new StatsClient();

var stats = statsClient.getStats('gutomaia', 'portal2', tf2status_xml);

exports.testVisibilityState = function(test){
    test.equal(3, stats.visibilityState);
    test.done();
}

exports.testGameFriendlyName = function(test){
    test.equal("Portal2", stats.gameFriendlyName);
    test.done();
}

exports.testGameName = function(test){
    test.equal("Portal 2", stats.gameName);
    test.done();
}

exports.testGameLink = function(test){
    test.equal("http://store.steampowered.com/app/620", stats.gameLink);
    test.done();
}

exports.testGameIcon = function(test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/620/2e478fc6874d06ae5baf0d147f6f21203291aa02.jpg", stats.gameIcon);
    test.done();
}

exports.testGameLogo = function(test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/620/d2a1119ddc202fab81d9b87048f495cbd6377502.jpg", stats.logo);
    test.done();
}

exports.testGameLogoSmall = function(test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/620/d2a1119ddc202fab81d9b87048f495cbd6377502_thumb.jpg", stats.logoSmall);
    test.done();
}

exports.testSteamID64 = function(test){
    test.equal(76561197985077150, stats.steamID64);
    test.done();
}

exports.testPlayerCustomURL = function(test){
    test.equal("gutomaia", stats.playerCustomURL);
    test.done();
}
