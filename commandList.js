"use strict";
const config = require("./config");

let unknownCommand = {
  pattern: /!.*/,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    //
  },
  roles: [
    config.everybodyRole
  ],
  channels: [
    config.allChannels
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
