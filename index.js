"use strict";
const Eris = require('eris');
const config = require('./config');
const commandList = require('./commandList')();
const token = require('./token');
const dateFormat = require('dateformat');
const fs = require('fs');

let bot = new Eris(token.botToken, {
  getAllUsers: true
});

bot.on('error', err => {
  console.log("ERROR:\n" + err.stack);
});

bot.on("ready", () => {
  bot.createMessage(config.botLogChannel, "I am online and ready to HYPE!");
  console.log('Hype bot is ready!\n--------');
});

commandList.add('intro');
commandList.add('rules');
commandList.add('moderation');
commandList.add('removeRole');

function userHasRole(user, role) {
  return user.roles.some(memberRole => memberRole === role);
}

function userHasAuthorityForCommand(user, command) {
  if(command.roles.some(role => role == config.everybodyRole)) {
    return true;
  }

  return command.roles.some(role => userHasRole(user, role));
}

function correctChannel(guild, channel){
  return guild.id === channel;
}

function correctChannelIsBeingUsed(guild, command) {
  if(command.channels.some(channel => channel === config.allChannels)){
    return true;
  }
  return command.channels.some(channel => correctChannel(guild, channel));
}

bot.on('messageCreate', (msg) => {

  if(!!msg.channel.guild && msg.channel.guild.id === config.HSserverID) {
    var messageSplit = msg.content.split(' ');
    var command = messageSplit.shift();

    var channelID = msg.channel.id;
    var userTag = msg.author.username + "#" + msg.author.discriminator;
    var userID = msg.author.id;

    if(userID === "84815422746005504" && command.toLowerCase() === "!log") {
      let now = new Date();
      let thisCycle = dateFormat(now, "UTC:mm-dd-yyyy-HH-MM");
      let bufferString = fs.readFileSync('./logs/hblog.log');
      bot.getDMChannel(userID).then((thisDM) => {
        bot.createMessage(thisDM.id, null, {file: bufferString, name: "hb.log"}).catch((error) => {console.log(error);});
      });
    }

    if(command.match(/^!/)) {
      let matchingCommand = commandList.find(command);
      //check for roles
      if(userHasAuthorityForCommand(msg.member, matchingCommand)) {
        if(correctChannelIsBeingUsed(msg.channel, matchingCommand) !== true) {
          return;
        }

        matchingCommand.execute(bot, channelID, userTag, userID, command, msg);
      }else {
        // Prepared for later functionality
      }
    }
  }
});

bot.connect();
