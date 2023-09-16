const EventsstageInstanceUpdateName = "stageInstanceUpdate";
 const EventsstageInstanceUpdateData = {
    "message0": "When a stage instance is updated %1 %2",
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
    "tooltip": "Emitted whenever a stage instance gets updated - e.g. change in topic or privacy level.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsstageInstanceUpdateName] = {
    init: function() {
        this.jsonInit(EventsstageInstanceUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['stageInstanceUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('stageInstanceUpdate', (oldStageInstance, newStageInstance) => {
    ${statements_event}
});\n`;
            return code;
          };