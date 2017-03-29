"use strict";
const config = require('./config');
let utils = require('./utils');

let addRoles = {
  location: function(bot, userID, channelID, location, msg, locationName, userTag){
    var roles = msg.member.roles;
    var index = roles.indexOf(location);
    if(index === -1){
      roles.push(location);
      bot.editGuildMember(msg.channel.guild.id, userID, {
        roles: roles
      }).then(() => {
        bot.createMessage(channelID, "<@" + userID + ">, you have been given the location of `" + locationName + "`. Use the same command again to remove this location from yourself.").then(utils.delay(config.delayInMS)).then((msgInfo) => {
          bot.deleteMessage(channelID, msgInfo.id);
          bot.deleteMessage(channelID, msg.id);
        }).catch((err) => {
          console.log("--> AddRoles | addRole\n" + err);
        });
        bot.createMessage(config.botLogChannel, "Gave `" + locationName + "` to **" + userTag + "**");
      });
    }else{
      roles.splice(index, 1);
      bot.editGuildMember(msg.channel.guild.id, userID, {
        roles: roles
      }).then(() => {
        bot.createMessage(channelID, "<@" + userID + ">, you have been removed from the `" + locationName + "` location. Use the same command again to add this location to yourself.").then(utils.delay(config.delayInMS)).then((msgInfo) => {
          bot.deleteMessage(channelID, msgInfo.id);
          bot.deleteMessage(channelID, msg.id);
        }).catch((err) => {
          console.log("--> AddRoles | removeRole\n" + err);
        });
        bot.createMessage(config.botLogChannel, "Removed `" + locationName + "` from **" + userTag + "**");
      });
    }
  }
}

module.exports = addRoles;
