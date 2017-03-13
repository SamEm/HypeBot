"use strict";
const config = require("../config");
let utils = require('../utils');

let moderation = {
  pattern: /!restart/i,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    bot.deleteMessage(channelID, msg.id);
    process.exit();
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
