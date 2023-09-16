const EventsguildDeleteName = "guildDelete";
 const EventsguildDeleteData = {
    "message0": "When a server is deleted or kicks the bot %1 %2",
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
    "tooltip": "Emitted whenever a guild kicks the client or the guild is deleted/left.",
    "helpUrl": ""
 };
Blockly.Blocks[guildDeleteName] = {
    init: function() {
        this.jsonInit(guildDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['guildDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildDelete', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };