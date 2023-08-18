const other_print = "other_print";
 const other_print_data = {
    "message0": "Print %1",
  "args0": [
    
        {
      "type": "input_value",
      "name": "print_input"
    }
   
 ],
  "inputsInline": false,
  "nextStatement": null,
  "previousStatement": null,
  "output": null,
  "colour": '#D14081',
  "tooltip": "Print something to the console",
  "helpUrl": ""
 };
Blockly.Blocks[other_print] = {
    init: function() {
        this.jsonInit(other_print_data);
    }
};

javascript.javascriptGenerator.forBlock['other_print'] = function(block, generator) {
    var value_code = generator.valueToCode(block, 'CODE', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = `print("${input_print_input}");`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, javascript.Order.ATOMIC];
  };
