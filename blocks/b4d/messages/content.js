const dName = 'message_content';

const dData = {
    "message0": "message content",
    "colour": "38b5cf",
    "tooltip": 'Message content',
    "helpUrl": '',
    "output": 'String',
};

Blockly.Blocks[dName] = {
    init: function() {
        this.jsonInit(dData);
    }
};
javascript.javascriptGenerator.forBlock[dName] = function() {
    return ['message.content', javascript.Order.NONE];
};
