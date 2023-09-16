const EventsmessageUpdateName = "messageUpdate";
 const EventsmessageUpdateData = {
    "message0": "When a message is updated %1 %2",
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
    "tooltip": "Emitted whenever a message is updated - e.g. embed or content change.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsmessageUpdateName] = {
    init: function() {
        this.jsonInit(EventsmessageUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['messageUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('messageUpdate', (oldMessage, newMessage) => {
    ${statements_event}
});\n`;
            return code;
          };