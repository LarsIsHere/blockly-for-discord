const EventsguildScheduledEventCreateName = "guildScheduledEventCreate";
 const EventsguildScheduledEventCreateData = {
    "message0": "When a server scheduled event is created %1 %2",
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
    "tooltip": "Emitted whenever a guild scheduled event is created.",
    "helpUrl": ""
 };
Blockly.Blocks[guildScheduledEventCreateName] = {
    init: function() {
        this.jsonInit(guildScheduledEventCreateData);
    }
};
javascript.javascriptGenerator.forBlock['guildScheduledEventCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildScheduledEventCreate', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };