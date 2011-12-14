function StatsClient(){
}

StatsClient.prototype.getStats = function (username, game, xml) {
    var stats = {
        "visibilityState":3,
        "gameFriendlyName":"TF2",
        "gameName":"Team Fortress 2",
        "gameLink":"http://store.steampowered.com/app/440",
        "gameIcon":"http://media.steampowered.com/steamcommunity/public/images/apps/440/e3f595a92552da3d664ad00277fad2107345f743.jpg",
        "logo":"http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg",
        "logoSmall":"http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8_thumb.jpg",
        "steamID64":76561197985077150,
        "playerCustomURL":"gutomaia"
        };
    if (game == 'portal2'){
        stats.gameFriendlyName = "Portal2";
    }
    return stats;
}
