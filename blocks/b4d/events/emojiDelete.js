const EventsemojiDeleteName = "emojiDelete";
 const EventsemojiDeleteData = {
    "message0": "When an Emoji is deleted %1 %2",
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
    "tooltip": "Emitted whenever a custom emoji is deleted in a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsemojiDeleteName] = {
    init: function() {
        this.jsonInit(EventsemojiDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['emojiDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('emojiDelete', (emoji) => {
    ${statements_event}
});\n`;
            return code;
          };