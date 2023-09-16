const EventsrateLimitName = "rateLimit";
 const EventsrateLimitData = {
    "message0": "When the bot hits a rate limit during a request %1 %2",
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
    "tooltip": "Emitted when the client hits a rate limit while making a request.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsrateLimitName] = {
    init: function() {
        this.jsonInit(EventsrateLimitData);
    }
};
javascript.javascriptGenerator.forBlock['rateLimit'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('rateLimit', (rateLimitData) => {
    ${statements_event}
});\n`;
            return code;
          };