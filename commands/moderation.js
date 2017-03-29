"use strict";
const config = require("../config");
let utils = require('../utils');

let moderation = {
  pattern: /!restart|!ping/i,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    switch (command.toLowerCase()) {
      case "!restart":
        console.log("Restarting");
        bot.deleteMessage(channelID, msg.id).then(() => {
          process.exit();
        });
        break;
      case "ping":
        console.log("Pong!");
        bot.createMessage(channelID, "Pong!");
        break;
      default:

    }
  },
  roles: [
    config.modRole,
    config.hypeQueenRole,
    config.discordDevRole,
    config.hypeAlchRole
    ],
  channels: [
    config.allChannels
  ]
}
module.exports = moderation;
