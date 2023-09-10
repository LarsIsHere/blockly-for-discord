const rsend = 'message_reply';

const rdatasend = {
  "message0": "reply text %1 with embeds %2 ping user %3",
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
    },
    {
      "type": "input_value",
      "name": "ping",
      "check": "Boolean"
    }
  ],
    "colour": "38b5cf",
    "tooltip": 'Message respond',
    "helpUrl": '',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[rsend] = {
    init: function() {
        this.jsonInit(rdatasend);
    }
};
javascript.javascriptGenerator.forBlock[rsend] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  var value_embed = generator.valueToCode(block, 'embed', javascript.Order.ATOMIC);
  var value_ping = generator.valueToCode(block, 'ping', javascript.Order.ATOMIC);
  return `message.reply({
  content: ${value_text},${value_embed == "" ? "" : `\nembeds: ${value_embed},`}
  allowedMentions: {
    repliedUser: ${value_ping ? "true" : "false"}
  }
});\n`
};
