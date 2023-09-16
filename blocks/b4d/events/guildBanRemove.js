const EventsguildBanRemoveName = "guildBanRemove";
 const EventsguildBanRemoveData = {
    "message0": "When a member is unbanned %1 %2",
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
    "tooltip": "Emitted whenever a member is unbanned from a guild.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsguildBanRemoveName] = {
    init: function() {
        this.jsonInit(EventsguildBanRemoveData);
    }
};
javascript.javascriptGenerator.forBlock['guildBanRemove'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildBanRemove', (ban) => {
    ${statements_event}
});\n`;
            return code;
          };