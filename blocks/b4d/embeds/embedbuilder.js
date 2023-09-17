const EmbedBuilderName = "embed_builder";
 const EmbedBuilderData = {
    "message0": "Create Embed %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "name"
      },
      {
        "type": "input_statement",
        "name": "properties"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 15,
    "tooltip": "",
    "helpUrl": ""
 };
Blockly.Blocks[EmbedBuilderName] = {
    init: function() {
        this.jsonInit(EmbedBuilderData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_builder'] = function(block, generator) {
        var value_name = generator.valueToCode(block, 'name', javascript.Order.ATOMIC);
        var statements_properties = generator.statementToCode(block, 'properties');
        // TODO: Assemble javascript into code variable.
        var code = `const ${value_name} = new EmbedBuilder()
        ${statements_properties}\n`;
        return code;
      };


