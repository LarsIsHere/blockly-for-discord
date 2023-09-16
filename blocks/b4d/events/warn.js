const EventswarnName = "warn";
 const EventswarnData = {
    "message0": "When Discord sends a warning %1 %2",
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
    "tooltip": "Emitted for general warnings.",
    "helpUrl": ""
 };
Blockly.Blocks[EventswarnName] = {
    init: function() {
        this.jsonInit(EventswarnData);
    }
};
javascript.javascriptGenerator.forBlock['warn'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('warn', (info) => {
      ${statements_event}
});\n`;
            return code;
          };