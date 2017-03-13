"use strict";
const config = require("../config");
let utils = require('../utils');

let rules = {
  pattern: /!rules/i,
  execute: function(bot, channelID, userTag, userID, command) {
    //introduction command

    bot.createMessage(channelID, "The rules are simple: The first one to lose, dies.\n" +
    "Wait, that's Yu-Gi-Oh... This is the HypeSquad! Nonetheless, these rules are simple too!\n" +
    "***1.*** Keep the HypeSquad Safe for work.\n" +
    "***2.*** Make sure your conversations are relevant to the channel you're chatting in!\n" +
    "***3.*** Don't engage negative behavior. Mods will take care of those that get out of hand.\n" +
    "***4.*** Speaking of Mods, if you have any questions please direct them to the mods! they're relatively tame and can answer most of your questions!");
  },
  roles: [
    config.everybodyRole
    ],
  channels: [
    config.allChannels
  ]
}
module.exports = rules;
