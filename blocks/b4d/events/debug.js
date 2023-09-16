const EventsdebugName = "debug";
 const EventsdebugData = {
    "message0": "Debug Event %1 %2",
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
    "tooltip": "Emitted for general debugging information.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsApiRequestName] = {
    init: function() {
        this.jsonInit(EventsApiRequestData);
    }
};
javascript.javascriptGenerator.forBlock['debug'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('debug', (debug) => {
    ${statements_event}
});\n`;
            return code;
          };