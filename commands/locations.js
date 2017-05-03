"use strict";
const config = require("../config");
let addRoles = require('../addRole');

const locationPattern = Object.keys(config.locations).join("|");

let locations = {
  pattern: new RegExp("!(" + locationPattern  + ")", "i"),
  execute: function(bot, channelID, userTag, userID, command, msg) {
    const locationData = config.locations[command.toLowerCase().substring(1)];
    if (locationData) {
      addRoles.location(bot, userID, channelID, locationData.roleID, msg, locationData.name, userTag)
    }
  },
  roles: [
    config.everybodyRole
    ],
  channels: [
    config.botSpam
  ]
}
module.exports = locations;
