const ProcessEnv = "base_process_env";
 const ProcessEnvData = {
    "message0": "process.env %1",
  "args0": [
    {
      "type": "input_value",
      "name": "CODE",
      "check": [ "Number", "String" ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": '#43A6C6',
  "tooltip": "This block will help you hide your token. Having your token public is a big security issue!",
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
    var code = `process.env.string(${value_code})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, javascript.Order.ATOMIC];
  };
