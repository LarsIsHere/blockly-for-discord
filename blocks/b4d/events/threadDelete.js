const EventsthreadDeleteName = "threadDelete";
 const EventsthreadDeleteData = {
    "message0": "When a thread is deleted %1 %2",
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
    "tooltip": "Emitted whenever a thread is created or when the client user is added to a thread.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsthreadDeleteName] = {
    init: function() {
        this.jsonInit(EventsthreadDeleteData);
    }
};
javascript.javascriptGenerator.forBlock['threadDelete'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('threadDelete', (thread) => {
    ${statements_event}
});\n`;
            return code;
          };