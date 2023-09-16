const EventsguildScheduledEventUserRemoveName = "guildScheduledEventUserRemove";
 const EventsguildScheduledEventUserRemoveData = {
    "message0": "When a user unsubscribes from a scheduled event %1 %2",
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
    "tooltip": "Emitted whenever a user unsubscribes from a guild scheduled event",
    "helpUrl": ""
 };
Blockly.Blocks[EventsguildScheduledEventUserRemoveName] = {
    init: function() {
        this.jsonInit(EventsguildScheduledEventUserRemoveData);
    }
};
javascript.javascriptGenerator.forBlock['guildScheduledEventUserRemove'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildScheduledEventUserRemove', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };