const Name = 'message_content';

const Data = {
    "message0": "message content",
    "colour": "38b5cf",
    "tooltip": 'Message content',
    "helpUrl": '',
    "output": 'String',
};

Blockly.Blocks[Name] = {
    init: function() {
        this.jsonInit(Data);
    }
};
javascript.javascriptGenerator.forBlock[Name] = function() {
    return 'message.content';
};
