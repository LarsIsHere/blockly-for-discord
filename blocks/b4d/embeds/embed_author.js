const EmbedAuthorName = "embed_author";
 const EmbedAuthorData = {
    "message0": "Set Author %1",
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
Blockly.Blocks[EmbedAuthorName] = {
    init: function() {
        this.jsonInit(EmbedAuthorData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_author'] = function(block, generator) {
        var value_title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `.setAuthor(${value_title})\n`;
        return code;
      };

