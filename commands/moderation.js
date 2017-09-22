"use strict";
const config = require("../config");
const utils = require('../utils');

let moderation = {
  pattern: /!restart|!ping|!addrole|!allroles/i,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    switch (command.toLowerCase()) {
      case "!allroles":

        let roles = msg.member.guild.roles;
        let allRoles = '';
        let rolesList = roles.map(function(role) {
          let thisRole = `\n${role.name}: '${role.id}'`;
          if(thisRole.length + allRoles.length > 1990) {
            bot.createMessage(channelID, "```js" + allRoles + "```").catch((err) => {
              console.log("roleList\n" + err);
            });
            allRoles = '';
          }
          allRoles += thisRole;
        });

        bot.createMessage(channelID, "```js" + allRoles + "```").catch((err) => {console.log(err);});
        break;
      case "!restart":
        console.log("Restarting");
        bot.deleteMessage(channelID, msg.id).then(() => {
          process.exit();
        });
        break;
      case "!ping":
        console.log("Pong!");
        bot.createMessage(channelID, "Pong!");
        break;

      case "!addrole":
        let msgSplit = msg.content.split(' ');
        msgSplit.shift();
        msgSplit.join('\n');
        let userList = msgSplit[0].split('\n');
        let roleID = userList.shift();

        if(!roleID) {
          bot.createMessage(channelID, "EHM, I believe you forgot something! (Role ID and/or users to add)");
          return;
        }

        let checkRoleValid = msg.channel.guild.roles.get(roleID);
        if(checkRoleValid === -1) {
          bot.createMessage(channelID, "Whoops, doesn't look like that role exists. Might want to recheck that!");
          return;
        }

        //check if role exists
        //assign all roles to userIDs
        //drop failed roles into array

        bot.createMessage(channelID, "Working...");

        let usersHaveRole = [];
        let nullUsers = [];

        let addRoles = userList.reduce((previousID, userID) => {
          return previousID
          .then(utils.delay(1500))
          .then(thisID => {
            let getUser = msg.channel.guild.members.get(userID);
            if(!getUser) {
              nullUsers.push(userID);
            } else {
              let checkUserRoles = getUser.roles.indexOf(roleID);
              if(checkUserRoles > -1) {
                usersHaveRole.push(userID);
              } else {
                getUser.roles.push(roleID);
                bot.editGuildMember(msg.channel.guild.id, userID, {
                  roles: getUser.roles
                }).catch((err) => {
                  //console.log(err);
                });
              }
            }
            return doneMsg (bot, channelID, usersHaveRole, nullUsers);
          });
        }, Promise.resolve([]));

        addRoles.then(result => {
          bot.createMessage(channelID, "Done." + result).catch((err) => {console.log("cookies\n" + err);})
        });
        break;

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

function doneMsg (bot, channelID, usersHaveRole, nullUsers) {

  let hasRoleTxt;
  let missingUsrTxt;

  if(usersHaveRole.length !== 0) {
    hasRoleTxt = "\nThese users already had the role:\n```\n" + usersHaveRole.join('\n') + "```";
  }else {
    hasRoleTxt = "";
  }
  if(nullUsers.length !== 0) {
    missingUsrTxt = "\nCould not find these users:\n```\n" + nullUsers.join('\n') + "```";
  } else {
    missingUsrTxt = "";
  }
  return hasRoleTxt + missingUsrTxt;
}
module.exports = moderation;
