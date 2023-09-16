const EventsguildCreateName = "guildCreate";
 const EventsguildCreateData = {
    "message0": "When the bot joins a server %1 %2",
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
    "tooltip": "Emitted whenever the client joins a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[guildCreateName] = {
    init: function() {
        this.jsonInit(guildCreateData);
    }
};
javascript.javascriptGenerator.forBlock['guildCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildCreate', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };