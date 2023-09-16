const EventsmessageReactionAddName = "messageReactionAdd";
 const EventsmessageReactionAddData = {
    "message0": "When a reaction is added to a cached message %1 %2",
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
    "tooltip": "Emitted whenever a reaction is added to a cached message.",
    "helpUrl": ""
 };
Blockly.Blocks[messageReactionAddName] = {
    init: function() {
        this.jsonInit(messageReactionAddData);
    }
};
javascript.javascriptGenerator.forBlock['messageReactionAdd'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('messageReactionAdd', (reaction, user) => {
    ${statements_event}
});\n`;
            return code;
          };