const eName = 'message_system';

const eData = {
    "message0": "message from system?",
    "colour": "38b5cf",
    "tooltip": 'message from system?',
    "helpUrl": '',
    "output": 'Boolean',
};

Blockly.Blocks[eName] = {
    init: function() {
        this.jsonInit(eData);
    }
};
javascript.javascriptGenerator.forBlock[eName] = function() {
    return ['message.system', javascript.Order.NONE];
};
