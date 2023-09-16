const EventsstickerDeleteName = "stickerDelete";
 const EventsstickerDeleteData = {
    "message0": "When a sticker is deleted %1 %2",
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
    "tooltip": "Emitted whenever a custom sticker is deleted in a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsstickerDeleteName] = {
    init: function() {
        this.jsonInit(EventsstickerDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['stickerDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('stickerDelete', (sticker) => {
    ${statements_event}
});\n`;
            return code;
          };