const EventsguildUnavailableName = "guildUnavailable";
 const EventsguildUnavailableData = {
    "message0": "When a server becomes unavailable %1 %2",
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
    "tooltip": "Emitted whenever a guild becomes unavailable, likely due to a server outage.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsguildUnavailableName] = {
    init: function() {
        this.jsonInit(EventsguildUnavailableData);
    }
};
javascript.javascriptGenerator.forBlock['guildUnavailable'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildUnavailable', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };