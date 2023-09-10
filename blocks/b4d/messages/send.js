const send = 'message_send';

const datasend = {
  "message0": "respond %1 %2 with text %3 with embeds %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "in channel",
          "a"
        ],
        [
          "as reply",
          "b"
        ],
        [
          "as reply (no ping)",
          "c"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
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
  var dropdown_name = block.getFieldValue('type');
  var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  var value_embed = generator.valueToCode(block, 'embed', javascript.Order.ATOMIC);
  if (dropdown_name == "a") {
    return `message.channel.send({
  content: ${value_text},${value_embed == "" ? "" : `\nembeds: ${value_embed},`}
});\n`
  } else {
    return `message.reply({
  content: ${value_text},${value_embed == "" ? "" : `\nembeds: ${value_embed},`}
  allowedMentions: {
    repliedUser: ${dropdown_name == "b" ? "true" : "false"}
  }
});\n`
  }
};
