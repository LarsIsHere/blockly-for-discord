const EmbedColorName = "embed_color";
 const EmbedColorData = {
    "message0": "Set Color %1",
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
Blockly.Blocks[EmbedColorName] = {
    init: function() {
        this.jsonInit(EmbedColorData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_color'] = function(block, generator) {
        var value_title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `.setColor(${value_title})\n`;
        return code;
      };

