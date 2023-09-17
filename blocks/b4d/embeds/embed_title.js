const EmbedTitleName = "embed_title";
 const EmbedTitleData = {
    "message0": "Set Title %1",
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
Blockly.Blocks[EmbedTitleName] = {
    init: function() {
        this.jsonInit(EmbedTitleData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_title'] = function(block, generator) {
        var value_title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `.setTitle(${value_title})\n`;
        return code;
      };

