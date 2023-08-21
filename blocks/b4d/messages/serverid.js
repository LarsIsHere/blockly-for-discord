const cName = 'message_serverid';

const cData = {
    "message0": "message server id",
    "colour": "38b5cf",
    "tooltip": 'Message serverid',
    "helpUrl": '',
    "output": 'String',
};

Blockly.Blocks[cName] = {
    init: function() {
        this.jsonInit(cData);
    }
};
javascript.javascriptGenerator.forBlock[cName] = function() {
    return ['message.guildId', javascript.Order.NONE];
};
