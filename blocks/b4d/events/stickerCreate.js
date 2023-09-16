const EventsstickerCreateName = "stickerCreate";
 const EventsstickerCreateData = {
    "message0": "When a Sticker is created %1 %2",
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
    "tooltip": "Emitted whenever a custom sticker is created in a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsstickerCreateName] = {
    init: function() {
        this.jsonInit(EventsstickerCreateData);
    }
};
javascript.javascriptGenerator.forBlock['stickerCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('stickerCreate', (sticker) => {
    ${statements_event}
});\n`;
            return code;
          };