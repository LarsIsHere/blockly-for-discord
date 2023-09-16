const EventstypingStartName = "typingStart";
 const EventstypingStartData = {
    "message0": "When a user starts typing %1 %2",
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
    "tooltip": "Emitted whenever a user starts typing in a channel.",
    "helpUrl": ""
 };
Blockly.Blocks[EventstypingStartName] = {
    init: function() {
        this.jsonInit(EventstypingStartData);
    }
};
javascript.javascriptGenerator.forBlock['typingStart'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('typingStart', (typing) => {
   ${statements_event}
});\n`;
            return code;
          };