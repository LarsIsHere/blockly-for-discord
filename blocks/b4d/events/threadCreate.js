const EventsthreadCreateName = "threadCreate";
 const EventsthreadCreateData = {
    "message0": "When a thread is created %1 %2",
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
Blockly.Blocks[EventsthreadCreateName] = {
    init: function() {
        this.jsonInit(EventsthreadCreateData);
    }
};
javascript.javascriptGenerator.forBlock['threadCreate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('threadCreate', (thread) => {
    ${statements_event}
});\n`;
            return code;
          };