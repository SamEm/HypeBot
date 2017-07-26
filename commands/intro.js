"use strict";
const config = require("../config");
let utils = require('../utils');

let intro = {
  pattern: /!introduction|!intro/i,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    //introduction command

    bot.createMessage(channelID, "Introductions are a good way to break the ice with your fellow HypeSquaders!\n" +
    "Here's a good template to follow when you say 'Hello' for the first time: (feel free to add more details to this framework! We wanna know you!)\n" +
    '```"Hi, my name is ___ but on the internet you can call me ___. I use Discord to ___ and my favorite game is ___.\n' +
    'I can\'t describe how much I love Discord, which is why I\'m here in the HypeSquad Server! When I\'m not gaming I love to ___ or ___. If I could eat one food for the rest of my life it would be ___.\n' +
    'I live near ___ in my home country of ___"```\n' +
    "We can't wait to say hello to you back! Make sure you greet other HypeSquaders with as much enthusiasm as possible when they introduce themselves too!");
  },
  roles: [
    config.everybodyRole
    ],
  channels: [
    config.allChannels
  ]
}
module.exports = intro;
