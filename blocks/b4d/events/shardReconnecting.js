const EventsshardReconnectingName = "shardReconnecting";
 const EventsshardReconnectingData = {
    "message0": "When a shard is reconnecting / re-identifying %1 %2",
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
    "tooltip": "Emitted when a shard is attempting to reconnect or re-identify.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsshardReconnectingName] = {
    init: function() {
        this.jsonInit(EventsshardReconnectingData);
    }
};
javascript.javascriptGenerator.forBlock['shardReconnecting'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('shardReconnecting', (id) => {
    ${statements_event}
});\n`;
            return code;
          };