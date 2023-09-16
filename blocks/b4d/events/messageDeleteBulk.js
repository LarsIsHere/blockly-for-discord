const EventsmessageDeleteBulkName = "messageDeleteBulk";
 const EventsmessageDeleteBulkData = {
    "message0": "When messages are deleted in bulk %1 %2",
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
    "tooltip": "Emitted whenever messages are deleted in bulk.",
    "helpUrl": ""
 };
Blockly.Blocks[messageDeleteBulkName] = {
    init: function() {
        this.jsonInit(messageDeleteBulkData);
    }
};
javascript.javascriptGenerator.forBlock['messageDeleteBulk'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('messageDeleteBulk', (messages) => {
    ${statements_event}
});\n`;
            return code;
          };