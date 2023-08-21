const EventsApiRequestName = "events_api_request";
 const EventsApiRequestData = {
    "message0": "When Client sends an API Request %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Event"
      }
    ],
    "colour": "#ffa200",
    "tooltip": "Emitted before every API request. This event can emit several times for the same request, e.g. when hitting a rate limit.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsApiRequestName] = {
    init: function() {
        this.jsonInit(EventsApiRequestData);
    }
};

javascript.javascriptGenerator.forBlock['events_api_request'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    var code = `client.on('apiRequest', (request) => {
        ${statements_event}
    });\n`;
    return code;
  };



