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
        bot.createMessage(channelID, "<@" + userID + ">, you have been given the location of `" + locationName + "`.").then(utils.delay(config.delayInMS)).then((msgInfo) => {
          bot.deleteMessage(channelID, msgInfo.id);
          bot.deleteMessage(channelID, msg.id);
        }).catch((err) => {
          console.log("--> AddRoles | addRole\n" + err);
        });
        bot.createMessage(config.botLogChannel, "Gave `" + locationName + "` to **" + userTag + "**");
      });
    }
  }
}

module.exports = addRoles;
