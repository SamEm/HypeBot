"use strict";
const config = require('./config');

let delays = {
  delay: function (delayMS) {
    return function(arg){
      return new Promise((resolve) => {
        setTimeout(() => resolve(arg), delayMS);
      });
    }
  }
}

module.exports = delays;
