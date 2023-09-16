const EventsguildBanAddName = "guildBanAdd";
 const EventsguildBanAddData = {
    "message0": "When a member is banned %1 %2",
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
    "tooltip": "Emitted whenever a member is banned from a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[guildBanAddName] = {
    init: function() {
        this.jsonInit(guildBanAddData);
    }
};
javascript.javascriptGenerator.forBlock['guildBanAdd'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildBanAdd', (ban) => {
    ${statements_event}
});\n`;
            return code;
          };