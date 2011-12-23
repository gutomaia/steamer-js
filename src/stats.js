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

StatsClient.prototype.getAchievements = function (username, game, xml){
    var achievements = [];

    if (game == 'tf2'){
        size = 381;
    } else {
        size = 67;
    }
    for (var i = achievements.length; i < size; i++)
        achievements.push({});

    if (game == 'tf2'){
        var a0 = {
            "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everyclass.jpg",
            "iconOpen":  "http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everyclass_bw.jpg",
            "name": "Head of the Class",
            "apiname": "tf_play_game_everyclass",
            "description": "Play a complete round with every class."
        };
        achievements[0] = a0;
        var a1 = {
            "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everymap.jpg",
            "iconOpen": "http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_play_game_everymap_bw.jpg",
            "name": "World Traveler",
            "apiname": "tf_play_game_everymap",
            "description": "Play a complete game on 2Fort, Dustbowl, Granary, Gravel Pit, Hydro, and Well (CP)."
        };
        achievements[1] = a1;
        var a2 = {
            "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/440/tf_get_healpoints.jpg"
        }
        achievements[2] = a2;
    } else {
        var a0 = {
            "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/550/8d94a8ffcb20fd11de547a6972bcef319fd93bf6.jpg",
            "iconOpen": "http://media.steampowered.com/steamcommunity/public/images/apps/550/19c4af0f9bb24b719a086cbd3b63961d8348bf2b.jpg",
            "name": "ACID REFLEX",
            "apiname": "ach_kill_spitter_fast",
            "description": "Kill a Spitter before she is able to spit.",
            "timestamp":1292701736000
        }
        achievements[0] = a0;
        var a1 = {
            "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/550/b1b772b233b812fd410aee1f175f8b1cb4fe4e43.jpg",
            "iconOpen": "http://media.steampowered.com/steamcommunity/public/images/apps/550/1921292f1593086aa0dc7d29124e4c0c1119e084.jpg",
            "name": "CRASS MENAGERIE",
            "apiname": "ach_kill_every_uncommon_infected",
            "description": "Kill one of each Uncommon Infected.",
            "timestamp": 1292451219000
        }
        achievements[1] = a1;
        var a2 = {
            "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/550/b65a6518c0680448e996e2190d1ed6b00ad14935.jpg",
            "iconOpen": "http://media.steampowered.com/steamcommunity/public/images/apps/550/95bb3011848b129b4b7483017a970700a0a22bd1.jpg",
            "name": "A RIDE DENIED",
            "apiname": "ach_save_player_from_jockey_fast",
            "description": "Kill a Jockey within 2 seconds of it jumping on a Survivor."
        }
        achievements[2] = a2;
        var a3 = {
            "iconClosed": "http://media.steampowered.com/steamcommunity/public/images/apps/550/4eb2b093ce1dd442da4a62c9a0659602fbfc0d1e.jpg",
            "iconOpen": "http://media.steampowered.com/steamcommunity/public/images/apps/550/4fc103dcb52ccc748b5bdea66924d1bf5c9e0705.jpg",
            "name": "ARMORY OF ONE",
            "apiname": "ach_deploy_ammo_upgrade",
            "description": "Deploy an ammo upgrade and have your team use it."
        }
        achievements[3] = a3;
    }

    return achievements;
}