const EventsshardErrorName = "shardError";
 const EventsshardErrorData = {
    "message0": "When a shards websocket encounters an error %1 %2",
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
    "tooltip": "Emitted whenever a shard's WebSocket encounters a connection error.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsshardErrorName] = {
    init: function() {
        this.jsonInit(EventsshardErrorData);
    }
};
javascript.javascriptGenerator.forBlock['shardError'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('shardError', (error, shardId) => {
    ${statements_event}
});\n`;
            return code;
          };