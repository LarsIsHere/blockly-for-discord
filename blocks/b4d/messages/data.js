const qName = 'message_data';

const qData = {
    "message0": "message %1",
    "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "content",
          ".content"
        ],
        [
          "channel id",
          ".channelId"
        ],
        [
          "id",
          ".id"
        ],
        [
          "message",
          "OPTIONNAME"
        ],
        [
          "server id",
          ".guildId"
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
