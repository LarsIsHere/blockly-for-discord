const yName = 'message_id';

const yData = {
    "message0": "message id",
    "colour": "38b5cf",
    "tooltip": 'Message id',
    "helpUrl": '',
    "output": 'String',
};

Blockly.Blocks[yName] = {
    init: function() {
        this.jsonInit(yData);
    }
};
javascript.javascriptGenerator.forBlock[yName] = function() {
    return ['message.id', javascript.Order.NONE];
};
