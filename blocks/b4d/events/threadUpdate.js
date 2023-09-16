const EventsthreadUpdateName = "threadUpdate";
 const EventsthreadUpdateData = {
    "message0": "When a thread is updated %1 %2",
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
    "tooltip": "Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsthreadUpdateName] = {
    init: function() {
        this.jsonInit(EventsthreadUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['threadUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('threadUpdate', (oldThread, newThread) => {
    ${statements_event}
});\n`;
            return code;
          };