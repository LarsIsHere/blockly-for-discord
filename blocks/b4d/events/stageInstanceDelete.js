const EventsstageInstanceDeleteName = "stageInstanceDelete";
 const EventsstageInstanceDeleteData = {
    "message0": "When a stage instance is deleted %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Event"
      }
    ],
   "colour": "#ffa200",
    "tooltip": "Emitted whenever a stage instance is deleted.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsstageInstanceDeleteName] = {
    init: function() {
        this.jsonInit(EventsstageInstanceDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['stageInstanceDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('stageInstanceDelete', (stageInstance) => {
    ${statements_event}
});\n`;
            return code;
          };