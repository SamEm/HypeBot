"use strict";
const config = require("./config");
const ids = require('./ids');
const addRoles = require('./addRole');

let unknownCommand = {
  pattern: /!.*/,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    let match = command.match(/!(.*)/i);
    let thisLocation = match[1].toLowerCase();
    let locationID = ids[thisLocation];

    if(!locationID) {
      return;
    }
    addRoles.location(bot, userID, channelID, locationID, msg, thisLocation, userTag);
  },
  roles: [
    config.everybodyRole
  ],
  channels: [
    config.botSpam
  ]
}

function CommandList() {
  if(!(this instanceof CommandList)) return new CommandList();
  this._commands = [unknownCommand];
}

CommandList.prototype.add = function(commandName) {
  this._commands.unshift(require("./commands/" + commandName));
}

CommandList.prototype.find = function(commandName) {
  return this._commands.find(com => com.pattern.test(commandName));
}

module.exports = CommandList;
