const EventsroleDeleteName = "roleDelete";
 const EventsroleDeleteData = {
    "message0": "When a role is deleted %1 %2",
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
    "tooltip": "Emitted whenever a role is deleted.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsroleDeleteName] = {
    init: function() {
        this.jsonInit(EventsroleDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['roleDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('roleDelete', (role) => {
    ${statements_event}
});\n`;
            return code;
          };