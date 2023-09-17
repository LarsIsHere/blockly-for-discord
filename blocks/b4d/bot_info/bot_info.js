const BotInfoName = "base_bot_info";
 const BotInfoData = {
    "message0": "Bot %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "botinfo",
        "options": [
          [
            "Amount of Servers",
            "client.guilds.cache.size"
          ],
          [
            "Amount of Channels",
            "client.channels.cache.size"
          ],
          [
            "Amount of Users",
            "client.users.cache.size"
          ],
          [
            "has uptime [ms]",
            "client.uptime"
          ],
          [
            "was ready at",
            "client.readyAt"
          ],
          [
            "was ready at [timestamp]",
            "client.readyTimestamp"
          ],
          [
            "has ping",
            "client.ws.ping"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "With this you can get info about your client/bot. This is not all the available information but the most useful.",
    "helpUrl": ""
 };
Blockly.Blocks[BotInfoName] = {
    init: function() {
        this.jsonInit(BotInfoData);
    }
};

  javascript.javascriptGenerator.forBlock['base_bot_info'] = function(block, generator) {
    var dropdown_botinfo = block.getFieldValue('botinfo');
    // TODO: Assemble javascript into code variable.
    var code = `${dropdown_botinfo}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, javascript.Order.ATOMIC];
  };