const EventsthreadListSyncName = "threadListSync";
 const EventsthreadListSyncData = {
    "message0": "When the bot gains access to a a text or news channel with threads %1 %2",
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
    "tooltip": "Emitted whenever the client user gains access to a text or news channel that contains threads",
    "helpUrl": ""
 };
Blockly.Blocks[EventsthreadListSyncName] = {
    init: function() {
        this.jsonInit(EventsthreadListSyncData);
    }
};
javascript.javascriptGenerator.forBlock['threadListSync'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('threadListSync', (threads) => {
    ${statements_event}
});\n`;
            return code;
          };