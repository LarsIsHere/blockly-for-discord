const RawTextName = "raw_text";
 const RawTextData = {
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "value",
        "text": "abc"
      }
    ],
    "output": null,
    "colour": 165,
    "tooltip": "",
    "helpUrl": ""
 };
Blockly.Blocks[RawTextName] = {
    init: function() {
        this.jsonInit(RawTextData);
    }
};

javascript.javascriptGenerator.forBlock['raw_text'] = function(block, generator) {
    var text_value = block.getFieldValue('value');
    // TODO: Assemble javascript into code variable.
    var code = `${text_value}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, javascript.Order.ATOMIC];
  };