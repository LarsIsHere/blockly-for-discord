const rName = 'message_pinned';

const rData = {
    "message0": "message pinned?",
    "colour": "38b5cf",
    "tooltip": 'message pinned?',
    "helpUrl": '',
    "output": 'Boolean',
};

Blockly.Blocks[rName] = {
    init: function() {
        this.jsonInit(rData);
    }
};
javascript.javascriptGenerator.forBlock[rName] = function() {
    return ['message.pinned', javascript.Order.NONE];
};
