'use strict';

var cookie = require('@adobe/reactor-cookie');

module.exports = function(settings) {
  // TODO Return the data element value.
  cookie.set('duane', settings.deValue || 'Majestic Beard');
  console.log('The "name" data element set a duane cookie with a value of ' + cookie.get('duane'));
  return cookie.get('duane');
};
