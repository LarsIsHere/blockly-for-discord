const EventsstickerUpdateName = "stickerUpdate";
 const EventsstickerUpdateData = {
    "message0": "When a sticker is updated %1 %2",
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
Blockly.Blocks[EventsstickerUpdateName] = {
    init: function() {
        this.jsonInit(EventsstickerUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['stickerUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('stickerUpdate', (oldSticker, newSticker) => {
    ${statements_event}
});\n`;
            return code;
          };