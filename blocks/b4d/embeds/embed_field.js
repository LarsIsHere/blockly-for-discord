const EmbedFieldName = "embed_field";
 const EmbedFieldData = {
    "message0": "Add Field %1 name %2 Value %3 Inline %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name"
      },
      {
        "type": "input_value",
        "name": "value"
      },
      {
        "type": "input_value",
        "name": "inline",
        "check": "Boolean"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
 };
Blockly.Blocks[EmbedFieldName] = {
    init: function() {
        this.jsonInit(EmbedFieldData);
    }
};
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    javascript.javascriptGenerator.forBlock['embed_field'] = function(block, generator) {
        var value_name = generator.valueToCode(block, 'name', javascript.Order.ATOMIC);
        var value_value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
        var value_inline = generator.valueToCode(block, 'inline', javascript.Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        var code = `{ name: ${value_name}, value: ${value_value}, inline: ${value_inline}},\n`;
        return code;
      };

