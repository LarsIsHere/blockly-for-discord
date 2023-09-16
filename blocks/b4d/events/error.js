const EventserrorName = "error";
 const EventserrorData = {
    "message0": "When client encounters an error %1 %2",
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
    "tooltip": "Emitted when the client encounters an error.",
    "helpUrl": ""
 };
Blockly.Blocks[errorName] = {
    init: function() {
        this.jsonInit(errorData);
    }
};
javascript.javascriptGenerator.forBlock['error'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('error', (error) => {
    ${statements_event}
});\n`;
            return code;
          };