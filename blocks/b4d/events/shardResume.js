const EventsshardResumeName = "shardResume";
 const EventsshardResumeData = {
    "message0": "When a shard resumes %1 %2",
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
    "tooltip": "Emitted when a shard resumes successfully.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsshardResumeName] = {
    init: function() {
        this.jsonInit(EventsshardResumeData);
    }
};
javascript.javascriptGenerator.forBlock['shardResume'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('shardResume', (id, replayedEvents) => {
    ${statements_event}
});\n`;
            return code;
          };