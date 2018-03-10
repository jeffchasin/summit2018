'use strict';

var queryString = require('@adobe/reactor-query-string');

module.exports = function(settings) {
  // TODO Return whether the condition passes.
  var queryParams = queryString.parse(location.search);
  return settings.queryParamValue === queryParams[settings.queryParam];
};
