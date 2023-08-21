const EventsMessageName = "events_message_received";
 const EventsMessageData = {
    "message0": "When a message is sent %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Event"
      }
    ],
    "colour": "2f9aaf",
    "tooltip": "",
    "helpUrl": ""
 };
Blockly.Blocks[EventsMessageName] = {
    init: function() {
        this.jsonInit(EventsMessageData);
    }
};

javascript.javascriptGenerator.forBlock['events_message_received'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    var code = `client.on("message", (message) => {
        ${statements_event}
    });\n`;
    return code;
  };



