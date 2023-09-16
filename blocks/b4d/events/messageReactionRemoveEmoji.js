const EventsmessageReactionRemoveEmojiName = "messageReactionRemoveEmoji";
 const EventsmessageReactionRemoveEmojiData = {
    "message0": "When a bot removes an emoji reaction from a cached message %1 %2",
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
    "tooltip": "Emitted when a bot removes an emoji reaction from a cached message.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsmessageReactionRemoveEmojiName] = {
    init: function() {
        this.jsonInit(EventsmessageReactionRemoveEmojiData);
    }
};
javascript.javascriptGenerator.forBlock['messageReactionRemoveEmoji'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('messageReactionRemoveEmoji', (reaction) => {
    ${statements_event}
});\n`;
            return code;
          };