const EventsstageInstanceCreateName = "stageInstanceCreate";
 const EventsstageInstanceCreateData = {
    "message0": "When a stage instance is created %1 %2",
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
    "tooltip": "Emitted whenever a stage instance is created.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsstageInstanceCreateName] = {
    init: function() {
        this.jsonInit(EventsstageInstanceCreateData);
    }
};
javascript.javascriptGenerator.forBlock['stageInstanceCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('stageInstanceCreate', (stageInstance) => {
    ${statements_event}
});\n`;
            return code;
          };