const EventsinviteDeleteName = "inviteDelete";
 const EventsinviteDeleteData = {
    "message0": "When an invite is deleted %1 %2",
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
    "tooltip": "Emitted when an invite is deleted.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsinviteDeleteName] = {
    init: function() {
        this.jsonInit(EventsinviteDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['inviteDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('inviteDelete', (invite) => {
    ${statements_event}
});\n`;
            return code;
          };