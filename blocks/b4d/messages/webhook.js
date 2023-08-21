const uName = 'message_webhook';

const uData = {
    "message0": "message from webhook?",
    "colour": "38b5cf",
    "tooltip": 'Message from webhook?',
    "helpUrl": '',
    "output": 'Boolean',
};

Blockly.Blocks[uName] = {
    init: function() {
        this.jsonInit(uData);
    }
};
javascript.javascriptGenerator.forBlock[uName] = function() {
    return ['message.webhookId != null', javascript.Order.NONE];
};
