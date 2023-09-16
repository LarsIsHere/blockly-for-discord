const EventsemojiUpdateName = "emojiUpdate";
 const EventsemojiUpdateData = {
    "message0": "When an Emoji is Updated %1 %2",
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
    "tooltip": "Emitted whenever a custom emoji is updated in a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsApiRequestName] = {
    init: function() {
        this.jsonInit(EventsApiRequestData);
    }
};
javascript.javascriptGenerator.forBlock['emojiUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('emojiUpdate', (oldEmoji, newEmoji) => {
    ${statements_event}
});\n`;
            return code;
          };