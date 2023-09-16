const EventsmessageDeleteName = "messageDelete";
 const EventsmessageDeleteData = {
    "message0": "When a message is deleted %1 %2",
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
    "tooltip": "Emitted whenever a message is deleted.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsmessageDeleteName] = {
    init: function() {
        this.jsonInit(EventsmessageDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['messageDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('messageDelete', (message) => {
    ${statements_event}
});\n`;
            return code;
          };