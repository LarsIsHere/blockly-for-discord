const EmbedBuilderName = "embed_builder";
 const EmbedBuilderData = {
    "message0": "Create Embed %1 %2 %3",
    "args0": [
      {
       "type": "field_input",
       "name": "name",
       "text": "Embed"
      },
      {
       "type": "input_dummy"
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
        var value_name = block.getFieldValue('name');
        var statements_properties = generator.statementToCode(block, 'properties');
        // TODO: Assemble javascript into code variable.
        var code = `const ${value_name || "Embed1"} = new EmbedBuilder()
        ${statements_properties}\n`;
        return code;
      };


