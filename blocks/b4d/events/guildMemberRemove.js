const EventsguildMemberRemoveName = "guildMemberRemove";
 const EventsguildMemberRemoveData = {
    "message0": "When a member leaves a server or is kicked %1 %2",
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
    "tooltip": "Emitted whenever a member leaves a guild, or is kicked.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsguildMemberRemoveName] = {
    init: function() {
        this.jsonInit(EventsguildMemberRemoveData);
    }
};
javascript.javascriptGenerator.forBlock['guildMemberRemove'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildMemberRemove', (member) => {
    ${statements_event}
});\n`;
            return code;
          };