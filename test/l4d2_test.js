var fs = require('fs');
var sys = require('util');

var tf2status_function = fs.readFileSync(__dirname + '/../src/tf2stats.js', 'utf8');

eval(tf2status_function); //TODO need to change the filename

var tf2status_xml = fs.readFileSync(__dirname + '/../fixtures/gutomaia-l4d2.xml');

var statsClient = new StatsClient();

var stats = statsClient.getStats('gutomaia', 'l4d2', tf2status_xml);

exports.testVisibilityState = function(test){
    test.equal(3, stats.visibilityState);
    test.done();
}

exports.testGameFriendlyName = function(test){
    test.equal("L4D2", stats.gameFriendlyName);
    test.done();
}

exports.testGameName = function(test){
    test.equal("Left 4 Dead 2", stats.gameName);
    test.done();
}

exports.testGameLink = function(test){
    test.equal("http://store.steampowered.com/app/550", stats.gameLink);
    test.done();
}

exports.testGameIcon = function (test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/7d5a243f9500d2f8467312822f8af2a2928777ed.jpg", stats.gameIcon);
    test.done();
}

exports.testGameLogo = function (test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/205863cc21e751a576d6fff851984b3170684142.jpg", stats.logo);
    test.done();
}

exports.testGameLogoSmall = function (test){
    test.equal("http://media.steampowered.com/steamcommunity/public/images/apps/550/205863cc21e751a576d6fff851984b3170684142_thumb.jpg", stats.logoSmall);
    test.done();
}

exports.testSteamID64 = function (test){
    test.equal(76561197985077150, stats.steamID64);
    test.done();
}

exports.testPlayerCustomURL = function (test){
    test.equal("gutomaia", stats.playerCustomURL);
    test.done();
}


