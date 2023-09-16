const EventsuserUpdateName = "userUpdate";
 const EventsuserUpdateData = {
    "message0": "When a users details are changed %1 %2",
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
    "tooltip": "Emitted whenever a user's details (e.g. username) are changed.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsuserUpdateName] = {
    init: function() {
        this.jsonInit(EventsuserUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['userUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('userUpdate', (oldUser, newUser) => {
    ${statements_event}
});\n`;
            return code;
          };