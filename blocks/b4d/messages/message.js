const aName = 'message_message';

const aData = {
    "message0": "message",
    "colour": "38b5cf",
    "tooltip": 'Message',
    "helpUrl": '',
    "output": 'message',
};

Blockly.Blocks[aName] = {
    init: function() {
        this.jsonInit(aData);
    }
};
javascript.javascriptGenerator.forBlock[aName] = function() {
    return ['message', javascript.Order.NONE];
};
