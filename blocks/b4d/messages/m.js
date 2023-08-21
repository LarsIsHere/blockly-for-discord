const qName = 'message_data';

const qData = {
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
    "tooltip": 'Message author',
    "helpUrl": '',
    "output": 'user',
};

Blockly.Blocks[qName] = {
    init: function() {
        this.jsonInit(qData);
    }
};
javascript.javascriptGenerator.forBlock[qName] = function() {
  var dropdown_name = block.getFieldValue('NAME');
  return [`message${dropdown_name}`, javascript.Order.NONE];
};
