const EventsApiResponseName = "events_api_response";
 const EventsApiResponseData = {
    "message0": "When Client receives API Response %1 %2",
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
    "tooltip": "Emitted after every API request has received a response. This event does not necessarily correlate to completion of the request, e.g. when hitting a rate limit.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsApiResponseName] = {
    init: function() {
        this.jsonInit(EventsApiResponseData);
    }
};

javascript.javascriptGenerator.forBlock['events_api_response'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    var code = `client.on('apiResponse', (request, response) => {
        ${statements_event}
    });\n`;
    return code;
  };



