var mathChangeJson = {
  "message0": "change %1 by %2",
  "args0": [
    {"type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""]},
    {"type": "input_value", "name": "DELTA", "check": "Number"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230
};

Blockly.Blocks['math_change'] = {
  init: function() {
    this.jsonInit(mathChangeJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

var thingjson = {
  "message0": "%1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://scratch-blockly.vercel.app/discord.png",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "nextStatement": null,
  "colour": 230
};

Blockly.Blocks['logo'] = {
  init: function() {
    this.jsonInit(thingjson);
    var thisBlock = this;
    this.setTooltip(function() {
      return 's';
    });
  }
};
