const EventsinvalidatedName = "invalidated";
 const EventsinvalidatedData = {
    "message0": "When the bots session invalidates %1 %2",
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
    "tooltip": "Emitted when the client's session becomes invalidated. You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event.",
    "helpUrl": ""
 };
Blockly.Blocks[invalidatedName] = {
    init: function() {
        this.jsonInit(invalidatedData);
    }
};
javascript.javascriptGenerator.forBlock['invalidated'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('invalidated', () => {
    ${statements_event}
});\n`;
            return code;
          };