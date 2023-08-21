const iName = 'message_time';

const iData = {
    "message0": "message created timestamp (unix)",
    "colour": "38b5cf",
    "tooltip": 'message created timestamp in unix',
    "helpUrl": '',
    "output": 'Number',
};

Blockly.Blocks[iName] = {
    init: function() {
        this.jsonInit(iData);
    }
};
javascript.javascriptGenerator.forBlock[iName] = function() {
return ['message.createdTimestamp', javascript.Order.NONE];
};
