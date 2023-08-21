const tName = 'message_tts';

const tData = {
    "message0": "message has tts?",
    "colour": "38b5cf",
    "tooltip": 'Message has tts?',
    "helpUrl": '',
    "output": 'Boolean',
};

Blockly.Blocks[tName] = {
    init: function() {
        this.jsonInit(tData);
    }
};
javascript.javascriptGenerator.forBlock[tName] = function() {
    return ['message.tts', javascript.Order.NONE];
};
