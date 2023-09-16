const EventsguildIntegrationsUpdateName = "guildIntegrationsUpdate";
 const EventsguildIntegrationsUpdateData = {
    "message0": "When a guild integration is updated %1 %2",
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
    "tooltip": "Emitted whenever a guild integration is updated.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsguildIntegrationsUpdateName] = {
    init: function() {
        this.jsonInit(EventsguildIntegrationsUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['guildIntegrationsUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('guildIntegrationsUpdate', (guild) => {
    ${statements_event}
});\n`;
            return code;
          };