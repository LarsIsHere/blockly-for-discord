const EventsguildMembersChunkName = "guildMembersChunk";
 const EventsguildMembersChunkData = {
    "message0": "When a chunk of server members is received %1 %2",
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
    "tooltip": "Emitted whenever a chunk of guild members is received (all members come from the same guild).",
    "helpUrl": ""
 };
Blockly.Blocks[guildMembersChunkName] = {
    init: function() {
        this.jsonInit(guildMembersChunkData);
    }
};
javascript.javascriptGenerator.forBlock['guildMembersChunk'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildMembersChunk', (members, guild, chunk) => {
    ${statements_event}
});\n`;
            return code;
          };