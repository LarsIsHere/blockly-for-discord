const EventswebhookUpdateName = "webhookUpdate";
 const EventswebhookUpdateData = {
    "message0": "When a channels webhooks change %1 %2",
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
    "tooltip": "Emitted whenever a channel has its webhooks changed.",
    "helpUrl": ""
 };
Blockly.Blocks[EventswebhookUpdateName] = {
    init: function() {
        this.jsonInit(EventswebhookUpdateData);
    }
};
javascript.javascriptGenerator.forBlock['webhookUpdate'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('webhookUpdate', (channel) => {
    ${statements_event}
});\n`;
            return code;
          };