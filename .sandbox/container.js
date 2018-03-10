'use strict';

module.exports = {
  rules: [
    {
      name: 'Example Rule',
      events: [
        {
          modulePath: 'hello-summit/src/lib/events/delay.js',
          settings: {
            delay: 3000
          }
        }
      ],
      conditions: [
        {
          modulePath: 'hello-summit/src/lib/conditions/queryparameter.js',
          settings: {
            queryParam: 'campaign',
            queryParamValue: 'summit-rocks'
          }
        }
      ],
      actions: [
        {
          modulePath: 'hello-summit/src/lib/actions/alert.js',
          settings: {
            visitorName: '%duane%'
          }
        }
      ]
    }
  ],
  dataElements: {
    duane: {
      modulePath: 'hello-summit/src/lib/dataElements/name.js',
      settings: { }
    }
  },
  extensions: {
    'hello-summit': {
      displayName: 'Hello Duane',
      settings: {
        configName: 'Duane the Canadian Knob'
      }
    }
  },
  property: {
    name: 'Sandbox property',
    settings: {
      domains: [
        'adobe.com',
        'example.com'
      ],
      linkDelay: 100,
      euCookieName: 'sat_track',
      undefinedVarsReturnEmpty: false
    }
  },
  buildInfo: {
    turbineVersion: "14.0.0",
    turbineBuildDate: "2016-07-01T18:10:34Z",
    buildDate: "2016-03-30T16:27:10Z",
    environment: "development"
  }
};
