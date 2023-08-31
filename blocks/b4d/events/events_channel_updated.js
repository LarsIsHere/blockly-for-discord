const EventsChannelUpdated = "events_channel_updated";
 const EventsChannelUpdatedData = {
    "message0": "When a Channel is updated %1 %2",
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
    "tooltip": "Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsChannelUpdated] = {
    init: function() {
        this.jsonInit(EventsChannelUpdatedData);
    }
};

javascript.javascriptGenerator.forBlock['events_channel_updated'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    var code = `client.on('channelUpdate', (oldChannel, newChannel) => {
        ${statements_event}
    });\n`;
    return code;
  };



