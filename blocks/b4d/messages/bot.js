const wName = 'message_bot';

const wData = {
    "message0": "message from bot?",
    "colour": "38b5cf",
    "tooltip": 'Message from bot?',
    "helpUrl": '',
    "output": 'Boolean',
};

Blockly.Blocks[wName] = {
    init: function() {
        this.jsonInit(wData);
    }
};
javascript.javascriptGenerator.forBlock[wName] = function() {
    return ['message.user.bot', javascript.Order.NONE];
};
