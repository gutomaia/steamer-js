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
        stats.gameName = "Portal 2";
        stats.gameLink = "http://store.steampowered.com/app/620";
        stats.gameIcon = "http://media.steampowered.com/steamcommunity/public/images/apps/620/2e478fc6874d06ae5baf0d147f6f21203291aa02.jpg";
        stats.logo = "http://media.steampowered.com/steamcommunity/public/images/apps/620/d2a1119ddc202fab81d9b87048f495cbd6377502.jpg";
        stats.logoSmall = "http://media.steampowered.com/steamcommunity/public/images/apps/620/d2a1119ddc202fab81d9b87048f495cbd6377502_thumb.jpg";
    } else if (game == 'l4d2') {
        stats.gameFriendlyName = "L4D2";
        stats.gameName = "Left 4 Dead 2";
        stats.gameLink = "http://store.steampowered.com/app/550";
        stats.gameIcon = "http://media.steampowered.com/steamcommunity/public/images/apps/550/7d5a243f9500d2f8467312822f8af2a2928777ed.jpg";
        stats.logo = "http://media.steampowered.com/steamcommunity/public/images/apps/550/205863cc21e751a576d6fff851984b3170684142.jpg";
        stats.logoSmall = "http://media.steampowered.com/steamcommunity/public/images/apps/550/205863cc21e751a576d6fff851984b3170684142_thumb.jpg";
    }
    return stats;
}

StatsClient.prototype.getAchievements = function (){
    var achievements = [];
    var a1 = {
        "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/550/8d94a8ffcb20fd11de547a6972bcef319fd93bf6.jpg",
        "iconOpen": "http://media.steampowered.com/steamcommunity/public/images/apps/550/19c4af0f9bb24b719a086cbd3b63961d8348bf2b.jpg",
        "name": "ACID REFLEX",
        "apiname": "ach_kill_spitter_fast",
        "description": "Kill a Spitter before she is able to spit.",
        "timestamp":1292701736000
    }
    achievements.push(a1);
    
    for (var i = achievements.length; i < 67; i++)
        achievements.push({});
    return achievements;
}