const EventspresenceUpdateName = "presenceUpdate";
 const EventspresenceUpdateData = {
    "message0": "When a members presence is updated %1 %2",
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
    "tooltip": "Emitted whenever a guild member's presence (e.g. status, activity) is changed.",
    "helpUrl": ""
 };
Blockly.Blocks[EventspresenceUpdateName] = {
    init: function() {
        this.jsonInit(EventspresenceUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['presenceUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('presenceUpdate', (oldPresence, newPresence) => {
    ${statements_event}
});\n`;
            return code;
          };