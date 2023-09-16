const EventsthreadMemberUpdateName = "threadMemberUpdate";
 const EventsthreadMemberUpdateData = {
    "message0": "When the bots user's thread member is updated %1 %2",
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
    "tooltip": "Emitted whenever the client user's thread member is updated.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsthreadMemberUpdateName] = {
    init: function() {
        this.jsonInit(EventsthreadMemberUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['threadMemberUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('threadMemberUpdate', (oldMember, newMember) => {
    ${statements_event}
});\n`;
            return code;
          };