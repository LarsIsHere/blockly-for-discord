const potat = "base_potat";
 const potatdata = {
    "message0": "potat",
  "args0": [
    
   {}
    
  ],
  "inputsInline": true,
  "nextStatement": null,
  "previousStatement": null,
  "output": null,
  "colour": '#43A6C6',
  "tooltip": "love potato",
  "helpUrl": ""
 };
Blockly.Blocks[potat] = {
    init: function() {
        this.jsonInit(potatdata);
    }
};

javascript.javascriptGenerator.forBlock['base_process_env'] = function(block, generator) {
    var value_code = generator.valueToCode(block, 'CODE', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = `print("potato");`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, javascript.Order.ATOMIC];
  };
