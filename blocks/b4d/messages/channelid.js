const bName = 'message_channelid';

const bData = {
    "message0": "message channel id",
    "colour": "38b5cf",
    "tooltip": 'Message channelid',
    "helpUrl": '',
    "output": 'String',
};

Blockly.Blocks[bName] = {
    init: function() {
        this.jsonInit(bData);
    }
};
javascript.javascriptGenerator.forBlock[bName] = function() {
    return ['message.channelId', javascript.Order.NONE];
};
