"use strict";
const config = require("../config");
const ids = require('../ids');
let utils = require('../utils');

let removeRole = {
  pattern: /!remove/i,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    let splitMsg = msg.content.split(' ');
    splitMsg.shift();

    let joinMsg = splitMsg.join('');
    joinMsg = joinMsg.toLowerCase();

    if(!joinMsg) {
      bot.createMessage(channelID, "<@" + userID + ">, you need to add a location to remove").then(utils.delay(config.delayInMS)).then((msgInfo) => {
        bot.deleteMessage(channelID, msgInfo.id);
        bot.deleteMessage(channelID, msg.id);
      }).catch((err) => {
        console.log("--> removeRoles | wrongRole\n" + err);
      });
      return;
    }

    switch (joinMsg) {
      case "nl":
        joinMsg = "netherlands";
        break;
      case "uk":
        joinMsg = "unitedkingdom";
        break;
      case "uk":
        joinMsg = "unitedkingdom";
        break;
      case "nz":
        joinMsg = "newzealand";
        break;
    }
    let locationID = ids[joinMsg];
    if(!locationID) {
      bot.createMessage(channelID, "<@" + userID + ">, I can't find that location").then(utils.delay(config.delayInMS)).then((msgInfo) => {
        bot.deleteMessage(channelID, msgInfo.id).catch((err) => {});
        bot.deleteMessage(channelID, msg.id).catch((err) => {});
      }).catch((err) => {
        console.log("--> removeRoles | wrongRole\n" + err);
      });
      return;
    }

    let roles = msg.member.roles;
    let index = roles.indexOf(locationID);

    if(index === -1){
      bot.createMessage(channelID, "<@" + userID + ">, you don't have that role").then(utils.delay(config.delayInMS)).then((msgInfo) => {
        bot.deleteMessage(channelID, msgInfo.id);
        bot.deleteMessage(channelID, msg.id);
      }).catch((err) => {
        console.log("--> removeRoles | wrongRole\n" + err);
      });
      return;
    }

    roles.splice(index, 1);
    bot.editGuildMember(msg.channel.guild.id, userID, {
      roles: roles
    }).then(() => {
      bot.createMessage(channelID, "<@" + userID + ">, you have been removed from the `" + joinMsg + "` location.").then(utils.delay(config.delayInMS)).then((msgInfo) => {
        bot.deleteMessage(channelID, msgInfo.id);
        bot.deleteMessage(channelID, msg.id);
      }).catch((err) => {
        console.log("--> removeRoles | removeRole\n" + err);
      });
      bot.createMessage(config.botLogChannel, "Removed `" + joinMsg + "` from **" + userTag + "**");
    });
  },
  roles: [
    config.everybodyRole
    ],
  channels: [
    config.botSpam
  ]
}
module.exports = removeRole;
