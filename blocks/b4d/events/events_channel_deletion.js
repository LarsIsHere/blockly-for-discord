const EventsChannelDeleted = "events_channel_deletion";
 const EventsChannelDeletedData = {
    "message0": "When a Channel is deleted %1 %2",
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
    "tooltip": "Emitted whenever a channel is deleted.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsChannelDeleted] = {
    init: function() {
        this.jsonInit(EventsChannelDeletedData);
    }
};

javascript.javascriptGenerator.forBlock['events_channel_deletion'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    // ${statements_event}
    var code = `client.on('channelDelete', (channel) => {
        ${statements_event}
    });\n`;
    return code;
  };



