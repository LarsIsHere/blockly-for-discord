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
    "tooltip": "You need this block to make the bot receive messages. Too many of these blocks can result in performance issues or the bot not responding to (some) messages",
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
    var code = `client.on('messageCreate', (message) => {
        ${statements_event}
    });\n`;
    return code;
  };



