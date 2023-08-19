const gatewaysName = "base_gateways";
 const gatewaysData = {
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "Message Content",
            "MessageContent"
          ],
          [
            "Servers (Guilds)",
            "Guilds"
          ],
          [
            "Webhooks",
            "GuildWebhooks"
          ],
          [
            "Voice States",
            "GuildVoiceStates"
          ],
          [
            "Scheduled Events",
            "GuildScheduledEvents"
          ],
          [
            "Presence",
            "GuildPresences"
          ],
          [
            "Moderation",
            "GuildModeration"
          ],
          [
            "Guild Messages",
            "GuildMessages"
          ],
          [
            "Message Typing",
            "GuildMessageTyping"
          ],
          [
            "Message Reactions",
            "GuildMessageReactions"
          ],
          [
            "Members",
            "GuildMembers"
          ],
          [
            "Invites",
            "GuildInvites"
          ],
          [
            "Integrations",
            "GuildIntegrations"
          ],
          [
            "Emojis and Stickers",
            "GuildEmojisAndStickers"
          ],
          [
            "Bans",
            "GuildBans"
          ],
          [
            "Direct Messages",
            "DirectMessages"
          ],
          [
            "Direct Message Typing",
            "DirectMessageTyping"
          ],
          [
            "Direct Message Reactions",
            "DirectMessageReactions"
          ],
          [
            "Auto Moderation Execution",
            "AutoModerationExecution"
          ],
          [
            "Auto Moderation Configuration",
            "AutoModerationConfiguration"
          ],
          [
            "All",
            "all"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "Use this block with the advanced base block to define what events you want your bot to receive.",
    "helpUrl": ""
 };
Blockly.Blocks[gatewaysName] = {
    init: function() {
        this.jsonInit(gatewaysData);
    }
};

javascript.javascriptGenerator.forBlock['base_gateways'] = function(block, generator) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble javascript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, javascript.ORDER.NONE];
  };
