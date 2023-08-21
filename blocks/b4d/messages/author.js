const uqName = 'message_author';

const uqData = {
    "message0": "message author",
    "colour": "38b5cf",
    "tooltip": 'Message author',
    "helpUrl": '',
    "output": 'user',
};

Blockly.Blocks[uqName] = {
    init: function() {
        this.jsonInit(uqData);
    }
};
javascript.javascriptGenerator.forBlock[uqName] = function() {
    return ['message.author', javascript.Order.NONE];
};
