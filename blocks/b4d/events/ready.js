const EventsreadyName = "ready";
 const EventsreadyData = {
    "message0": "When the bot is ready %1 %2",
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
    "tooltip": "Emitted when the client becomes ready to start working.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsreadyName] = {
    init: function() {
        this.jsonInit(EventsreadyData);
    }
};
javascript.javascriptGenerator.forBlock['ready'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('ready', (client) => {
    ${statements_event}
});\n`;
            return code;
          };