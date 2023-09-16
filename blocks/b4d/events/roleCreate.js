const EventsroleCreateName = "roleCreate";
 const EventsroleCreateData = {
    "message0": "When a role is created %1 %2",
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
    "tooltip": "Emitted whenever a role is created.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsroleCreateName] = {
    init: function() {
        this.jsonInit(EventsroleCreateData);
    }
};
javascript.javascriptGenerator.forBlock['roleCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('roleCreate', (role) => {
    ${statements_event}
});\n`;
            return code;
          };