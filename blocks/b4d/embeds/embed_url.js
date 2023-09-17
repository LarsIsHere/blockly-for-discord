const EmbedTitleURLName = "embed_title_url";
 const EmbedTitleURLData = {
    "message0": "Set Title URL %1",
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
Blockly.Blocks[EmbedTitleURLName] = {
    init: function() {
        this.jsonInit(EmbedTitleURLData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_title_url'] = function(block, generator) {
        var value_title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `.setURL(${value_title})\n`;
        return code;
      };

