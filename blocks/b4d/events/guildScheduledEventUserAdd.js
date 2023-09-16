const EventsguildScheduledEventUserAddName = "guildScheduledEventUserAdd";
 const EventsguildScheduledEventUserAddData = {
    "message0": "When a user subscribes to server a scheduled event %1 %2",
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
    "tooltip": "Emitted whenever a user subscribes to a guild scheduled event",
    "helpUrl": ""
 };
Blockly.Blocks[guildScheduledEventUserAddName] = {
    init: function() {
        this.jsonInit(guildScheduledEventUserAddData);
    }
};
javascript.javascriptGenerator.forBlock['guildScheduledEventUserAdd'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildScheduledEventUserAdd', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };