var fs = require('fs');
var sys = require('util');

var assert = require('assert');

var stats_function = fs.readFileSync(__dirname + '/../src/stats.js', 'utf8');

eval(stats_function);

var tf2_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-tf2.xml');

var statsClient = new StatsClient();

var stats = statsClient.getStats('gutomaia', 'tf2', tf2_xml);

exports.testVisibilityState = function(test){
    test.equal(3, stats.visibilityState);
    test.done();
}

exports.testGameFriendlyName = function(test){
    test.equal("TF2", stats.gameFriendlyName);
    test.done();
}

exports.testGameName = function(test){
    test.equal("Team Fortress 2", stats.gameName);
    test.done();
}

exports.testGameLink = function(test){
    test.equal("http://store.steampowered.com/app/440", stats.gameLink);
    test.done();
}

exports.testGameIcon = function(test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/e3f595a92552da3d664ad00277fad2107345f743.jpg", stats.gameIcon);
    test.done();
}

exports.testGameLogo = function(test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg", stats.logo);
    test.done();
}

exports.testGameLogoSmall = function(test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8_thumb.jpg", stats.logoSmall);
    test.done();
}

exports.testSteamID64 = function(test){
    test.equal(76561197985077150,stats.steamID64);
    test.done();
}

exports.testPlayerCustomURL = function(test){
    test.equal("gutomaia",stats.playerCustomURL);
    test.done();
}