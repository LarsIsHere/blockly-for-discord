const EventsemojiCreateName = "emojiCreate";
 const EventsemojiCreateData = {
    "message0": "When an Emoji is created %1 %2",
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
    "tooltip": "Emitted whenever a custom emoji is created in a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsApiRequestName] = {
    init: function() {
        this.jsonInit(EventsApiRequestData);
    }
};
javascript.javascriptGenerator.forBlock['emojiCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('emojiCreate', (emoji) => {
    ${statements_event}
});\n`;
            return code;
          };