const EventsguildScheduledEventUpdateName = "guildScheduledEventUpdate";
 const EventsguildScheduledEventUpdateData = {
    "message0": "When a server scheduled event is updated %1 %2",
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
    "tooltip": "Emitted whenever a guild scheduled event gets updated.",
    "helpUrl": ""
 };
Blockly.Blocks[guildScheduledEventUpdateName] = {
    init: function() {
        this.jsonInit(guildScheduledEventUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['guildScheduledEventUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildScheduledEventUpdate', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };