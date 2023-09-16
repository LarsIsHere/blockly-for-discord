const EventsmessageReactionRemoveName = "messageReactionRemove";
 const EventsmessageReactionRemoveData = {
    "message0": "When a reaction is removed from a cached message %1 %2",
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
    "tooltip": "Emitted whenever a reaction is removed from a cached message.",
    "helpUrl": ""
 };
Blockly.Blocks[messageReactionRemoveName] = {
    init: function() {
        this.jsonInit(messageReactionRemoveData);
    }
};
javascript.javascriptGenerator.forBlock['messageReactionRemove'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('messageReactionRemove', (reaction, user) => {
   ${statements_event}
});\n`;
            return code;
          };