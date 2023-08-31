const EventsChannelPinsUpdate = "events_channel_pins_updated";
 const EventsChannelPinsUpdateData = {
    "message0": "When Channel Pins are updated %1 %2",
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
    "tooltip": "Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.",
    "helpUrl": ""
 };
Blockly.Blocks[EventsChannelPinsUpdate] = {
    init: function() {
        this.jsonInit(EventsChannelPinsUpdateData);
    }
};

javascript.javascriptGenerator.forBlock['events_channel_pins_updated'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    // TODO: Assemble javascript into code variable.
    var code = `client.on('channelPinsUpdate', (channel, time) => {
        ${statements_event}
    });\n`;
    return code;
  };



