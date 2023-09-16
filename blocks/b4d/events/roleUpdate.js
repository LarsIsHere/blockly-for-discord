const EventsroleUpdateName = "roleUpdate";
 const EventsroleUpdateData = {
    "message0": "When a role is updated %1 %2",
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
    "tooltip": "Emitted whenever a role is updated.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsroleUpdateName] = {
    init: function() {
        this.jsonInit(EventsroleUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['roleUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('roleUpdate', (oldRole, newRole) => {
    ${statements_event}
});\n`;
            return code;
          };