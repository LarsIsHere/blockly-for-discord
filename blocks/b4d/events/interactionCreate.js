const EventsinteractionCreateName = "interactionCreate";
 const EventsinteractionCreateData = {
    "message0": "When an Interaction is created %1 %2",
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
    "tooltip": "Emitted when an interaction is created.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsinteractionCreateName] = {
    init: function() {
        this.jsonInit(EventsinteractionCreateData);
    }
};
javascript.javascriptGenerator.forBlock['interactionCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('interactionCreate', (interaction) => {
    ${statements_event}
});\n`;
            return code;
          };