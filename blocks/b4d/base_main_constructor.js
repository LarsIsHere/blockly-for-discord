const blockName = "base_main_constructor";
 const blockData = {
  "message0": "Start Bot %1 %2 with token %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
    {
      "type": "field_input",
      "name": "TOKEN",
      "text": "token"
    }
  ],
  "nextStatement": null,
  "colour": #ffbf00,
  "tooltip": "",
  "helpUrl": ""
};
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascript.javascriptGenerator.forBlock['base_main_constructor'] = function(block, generator) {
  var statements_name = generator.statementToCode(block, 'NAME');
  var text_token = block.getFieldValue('TOKEN');
  // TODO: Assemble javascript into code variable.
  var code = 'main code yet to be made';
  return code;
};
