const EventsshardReadyName = "shardReady";
 const EventsshardReadyData = {
    "message0": "When a shard is ready %1 %2",
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
    "tooltip": "Emitted when a shard turns ready.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsshardReadyName] = {
    init: function() {
        this.jsonInit(EventsshardReadyData);
    }
};
javascript.javascriptGenerator.forBlock['shardReady'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('shardReady', (id, unavailableGuilds) => {
    ${statements_event}
});\n`;
            return code;
          };