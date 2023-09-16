const EventsguildMemberUpdateName = "guildMemberUpdate";
 const EventsguildMemberUpdateData = {
    "message0": "When a server member changes %1 %2",
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
    "tooltip": "Emitted whenever a guild member changes - i.e. new role, removed role, nickname.",
    "helpUrl": ""
 };
Blockly.Blocks[guildMemberUpdateName] = {
    init: function() {
        this.jsonInit(guildMemberUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['guildMemberUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildMemberUpdate', (oldMember) => {
    ${statements_event}
});\n`;
            return code;
          };