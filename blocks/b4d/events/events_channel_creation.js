const EventsChannelCreated = "events_channel_creation";
 const EventsChannelCreatedData = {
    "message0": "When a Channel is created %1 %2",
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
    "tooltip": "Emitted whenever a guild channel is created.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsChannelCreated] = {
    init: function() {
        this.jsonInit(EventsChannelCreatedData);
    }
};

javascript.javascriptGenerator.forBlock['events_channel_creation'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    var code = `client.on('channelCreate', (channel) => {
        ${statements_event}
    });\n`;
    return code;
  };



