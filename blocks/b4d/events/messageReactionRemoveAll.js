const EventsmessageReactionRemoveAllName = "messageReactionRemoveAll";
 const EventsmessageReactionRemoveAllData = {
    "message0": "When all reactions are removed from a cached message %1 %2",
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
    "tooltip": "Emitted whenever all reactions are removed from a cached message.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsmessageReactionRemoveAllName] = {
    init: function() {
        this.jsonInit(EventsmessageReactionRemoveAllData);
    }
};
javascript.javascriptGenerator.forBlock['messageReactionRemoveAll'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('messageReactionRemoveAll', (message, reactions) => {
    ${statements_event}
});\n`;
            return code;
          };