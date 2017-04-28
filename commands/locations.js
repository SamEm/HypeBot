"use strict";
const config = require("../config");
let addRoles = require('../addRole');

let locations = {
  pattern: /!southamerica|!asia|!australia|!scotland|!belgium|!brazil|!canada|!central|!eastern|!mountain|!pacific|!czech|!denmark|!estonia|!finland|!france|!germany|!ireland|!italy|!lithuania|!mexico|!netherlands|!nz|!newzealand|!norway|!portugal|!serbia|!russia|!slovenia|!spain|!sweden|!switzerland|!turkey|!uk|!unitedkingdom/i,
  execute: function(bot, channelID, userTag, userID, command, msg) {
    var roles = msg.member.roles;
    switch (command.toLowerCase()) {
      case "!southamerica":
        var location = config.southARole,
            locationName = "South America";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      case "!asia":
        var location = config.asiaRole,
            locationName = "Asia";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!australia":
        var location = config.australiaRole,
            locationName = "Australia";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!scotland":
        var location = config.scotlandRole,
            locationName = "Scotland";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!belgium":
        var location = config.belgiumRole,
            locationName = "Belgium";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!brazil":
        var location = config.brazilRole,
            locationName = "Brazil";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!canada":
        var location = config.canadaRole,
            locationName = "Canada";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!central":
        var location = config.centralRole,
            locationName = "Central U.S.";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!eastern":
        var location = config.easternRole,
            locationName = "Eastern U.S.";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!mountain":
        var location = config.mountainRole,
            locationName = "Mountain U.S.";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!pacific":
        var location = config.pacificRole,
            locationName = "Pacific U.S.";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!czech":
        var location = config.czechRole,
            locationName = "Czech Republic";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!denmark":
        var location = config.denmarkRole,
            locationName = "Denmark";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!estonia":
        var location = config.estoniaRole,
            locationName = "Estonia";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!finland":
        var location = config.finlandRole,
            locationName = "Finland";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!france":
        var location = config.franceRole,
            locationName = "France";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!germany":
        var location = config.germanyRole,
            locationName = "Germany";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!ireland":
        var location = config.irelandRole,
            locationName = "Ireland";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!italy":
        var location = config.italyRole,
            locationName = "Italy";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!lithuania":
        var location = config.lithuaniaRole,
            locationName = "Lithuania";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!mexico":
        var location = config.mexicoRole,
            locationName = "Mexico";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!netherlands":
        var location = config.netherlandsRole,
            locationName = "Netherlands";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!newzealand":
      case "!nz":
        var location = config.NZRole,
            locationName = "New Zealand";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!norway":
        var location = config.norwayRole,
            locationName = "Norway";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!portugal":
        var location = config.portugalRole,
            locationName = "Portugal";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!serbia":
        var location = config.serbiaRole,
            locationName = "Serbia";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!russia":
        var location = config.russiaRole,
            locationName = "Russia";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!slovenia":
        var location = config.sloveniaRole,
            locationName = "Slovenia";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!spain":
        var location = config.spainRole,
            locationName = "Spain";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!sweden":
        var location = config.swedenRole,
            locationName = "Sweden";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!switzerland":
        var location = config.switzerlandRole,
            locationName = "Switzerland";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!turkey":
        var location = config.turkeyRole,
            locationName = "Turkey";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!unitedkingdom":
      case "!uk":
        var location = config.ukRole,
            locationName = "UK";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!israel":
        var location = config.israelRole,
            locationName = "Israel";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
      case "!poland":
        var location = config.poland,
            locationName = "Poland";
        addRoles.location(bot, userID, channelID, location, msg, locationName, userTag);
      break;
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
