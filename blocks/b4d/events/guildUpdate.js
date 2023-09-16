const EventsguildUpdateName = "guildUpdate";
 const EventsguildUpdateData = {
    "message0": "When a server is updated %1 %2",
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
    "tooltip": "Emitted whenever a guild is updated - e.g. name change.",
    "helpUrl": ""
 };
Blockly.Blocks[guildUpdateName] = {
    init: function() {
        this.jsonInit(guildUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['guildUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildUpdate', (oldGuild, newGuild) => {
    ${statements_event}
});\n`;
            return code;
          };