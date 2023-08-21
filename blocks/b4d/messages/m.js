const nqName = 'message_data';

const nqData = {
    "message0": "is message %1 ?",
    "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "from bot",
          ".author.bot"
        ],
        [
          "pinned",
          ".pinned"
        ],
        [
          "from system",
          ".system"
        ],
        [
          "sent with tts",
          ".tts"
        ],
        [
          "from webhook",
          ".webhookId != null"
        ]
      ]
    }
  ],
    "colour": "38b5cf",
    "tooltip": 'is message',
    "helpUrl": '',
    "output": 'Boolean',
};

Blockly.Blocks[nqName] = {
    init: function() {
        this.jsonInit(nqData);
    }
};
javascript.javascriptGenerator.forBlock[nqName] = function() {
  var dropdown_name = block.getFieldValue('NAME');
  return [`message${dropdown_name}`, javascript.Order.NONE];
};
