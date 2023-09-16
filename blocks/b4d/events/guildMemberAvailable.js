const EventsguildMemberAvailableName = "guildMemberAvailable";
 const EventsguildMemberAvailableData = {
    "message0": "When a member becomes available in a large server %1 %2",
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
    "tooltip": "Emitted whenever a member becomes available in a large guild.",
    "helpUrl": ""
 };
Blockly.Blocks[guildMemberAvailableName] = {
    init: function() {
        this.jsonInit(guildMemberAvailableData);
    }
};
javascript.javascriptGenerator.forBlock['guildMemberAvailable'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildMemberAvailable', (member) => {
    ${statements_event}
});\n`;
            return code;
          };