
const blockName = "s4d_string_to_number";

const blockData = {
    "message0": "%1 aw",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": [ "Number", "String" ]
    }
    ],
    "output": "Number",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascript.javascriptGenerator.forBlock['block_type'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'STRING', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = '...\n';
    return code;
  };
