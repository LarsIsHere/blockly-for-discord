const EventsshardDisconnectName = "shardDisconnect";
 const EventsshardDisconnectData = {
    "message0": "When a shard websocket disconnects %1 %2",
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
    "tooltip": "Emitted when a shard's WebSocket disconnects and will no longer reconnect.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsshardDisconnectName] = {
    init: function() {
        this.jsonInit(EventsshardDisconnectData);
    }
};
javascript.javascriptGenerator.forBlock['shardDisconnect'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('shardDisconnect', (event, id) => {
    ${statements_event}
});\n`;
            return code;
          };