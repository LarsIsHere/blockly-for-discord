const EventsApplicationCommandUpdateName = "application_command_perm_update";
 const EventsApplicationCommandUpdateData = {
    "message0": "When an Applications Commands Permissions Changes %1 %2",
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
    "tooltip": "Emitted whenever permissions for an application command in a guild were updated.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsApplicationCommandUpdateName] = {
    init: function() {
        this.jsonInit(EventsApplicationCommandUpdateData);
    }
};

javascript.javascriptGenerator.forBlock['application_command_perm_update'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    var code = `client.on('applicationCommandPermissionsUpdate', (request) => {
        ${statements_event}
    });\n`;
    return code;
  };



