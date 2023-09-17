const EmbedThumbnailName = "embed_thumbnail";
 const EmbedThumbnailData = {
    "message0": "Set Thumbnail %1",
    "args0": [
      {
        "type": "input_value",
        "name": "title"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
 };
Blockly.Blocks[EmbedThumbnailName] = {
    init: function() {
        this.jsonInit(EmbedThumbnailData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_thumbnail'] = function(block, generator) {
        var value_title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `.setThumbnail(${value_title})\n`;
        return code;
      };

