const ProcessEnv = "base_potat";
 const ProcessEnvData = {
    "message0": "potat %1",
  "args0": [
    {
     {
      "type": "input_value",
      "name": "VALUE"
    }
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": '#43A6C6',
  "tooltip": "love potato",
  "helpUrl": ""
 };
Blockly.Blocks[ProcessEnv] = {
    init: function() {
        this.jsonInit(ProcessEnvData);
    }
};

javascript.javascriptGenerator.forBlock['base_process_env'] = function(block, generator) {
    var value_code = generator.valueToCode(block, 'CODE', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = `print("potato");`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, javascript.Order.ATOMIC];
  };
