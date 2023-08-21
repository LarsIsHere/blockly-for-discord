const qName = 'message_author';

const qData = {
    "message0": "message author",
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
    return ['message.author', javascript.Order.NONE];
};
