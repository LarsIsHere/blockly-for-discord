const EventsinviteCreateName = "inviteCreate";
 const EventsinviteCreateData = {
    "message0": "When an Invite is created %1 %2",
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
    "tooltip": "Emitted when an invite is created.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsinviteCreateName] = {
    init: function() {
        this.jsonInit(EventsinviteCreateData);
    }
};
javascript.javascriptGenerator.forBlock['inviteCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('inviteCreate', (invite) => {
    ${statements_event}
});\n`;
            return code;
          };