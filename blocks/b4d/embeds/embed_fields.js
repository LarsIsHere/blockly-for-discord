const EmbedFieldsName = "embed_fields";
 const EmbedFieldsData = {
    "message0": "Add Embed Fields %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "fields"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
 };
Blockly.Blocks[EmbedFieldsName] = {
    init: function() {
        this.jsonInit(EmbedFieldsData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_fields'] = function(block, generator) {
        var statements_fields = generator.statementToCode(block, 'fields');
        // TODO: Assemble javascript into code variable.
        var code = `.addFields(
            ${statements_fields}
        )\n`;
        return code;
      };
