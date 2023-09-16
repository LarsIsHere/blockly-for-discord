const EventsguildMemberAddName = "guildMemberAdd";
 const EventsguildMemberAddData = {
    "message0": "When a user joins a server %1 %2",
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
    "tooltip": "Emitted whenever a user joins a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[guildMemberAddName] = {
    init: function() {
        this.jsonInit(guildMemberAddData);
    }
};
javascript.javascriptGenerator.forBlock['guildMemberAdd'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildMemberAdd', (member) => {
    ${statements_event}
});\n`;
            return code;
          };