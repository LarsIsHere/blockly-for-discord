const send = 'message_send';

const datasend = {
  "message0": "Respond text %1 with embeds %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "embed",
      "check": "embed"
    }
  ],
    "colour": "38b5cf",
    "tooltip": 'Message respond',
    "helpUrl": '',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[send] = {
    init: function() {
        this.jsonInit(datasend);
    }
};
javascript.javascriptGenerator.forBlock[send] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  var value_embed = generator.valueToCode(block, 'embed', javascript.Order.ATOMIC);
  return `message.channel.send({
  content: ${value_text},${value_embed == "" ? "" : `\nembeds: ${value_embed},`}
});\n`
};
