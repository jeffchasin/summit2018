'use strict';

var extensionSettings = turbine.getExtensionSettings();

module.exports = function(settings) {
  // TODO Perform some action.
  if (settings.visitorName) {
    alert('Hello ' + settings.visitorName + '!')
  } else {
    alert('Hello World!')
  }

  console.log('The extension configuration "Name" is set to: ' + extensionSettings.configName);
  console.log('The data element "name" has a value of: ' + settings.visitorName);
};
