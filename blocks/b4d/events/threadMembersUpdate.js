const EventsthreadMembersUpdateName = "threadMembersUpdate";
 const EventsthreadMembersUpdateData = {
    "message0": "When members are added or removed from a thread %1 %2",
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
    "tooltip": "Emitted whenever members are added or removed from a thread.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsthreadMembersUpdateName] = {
    init: function() {
        this.jsonInit(EventsthreadMembersUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['threadMembersUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('threadMembersUpdate', (oldMembers, newMembers) => {
    ${statements_event}
});\n`;
            return code;
          };