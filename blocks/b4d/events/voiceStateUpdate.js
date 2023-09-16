const EventsvoiceStateUpdateName = "voiceStateUpdate";
 const EventsvoiceStateUpdateData = {
    "message0": "When a members voice state changes %1 %2",
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
    "tooltip": "Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsvoiceStateUpdateName] = {
    init: function() {
        this.jsonInit(EventsvoiceStateUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['voiceStateUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('voiceStateUpdate', (oldUser, newUser) => {
    ${statements_event}
});\n`;
            return code;
          };