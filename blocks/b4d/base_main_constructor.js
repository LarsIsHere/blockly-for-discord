const blockName = "base_main_constructor";
 const blockData = {
  "message0": "Start Bot %1 %2 with token %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
    {
      "type": "input_value",
      "name": "TOKEN"
    }
  ],
  "nextStatement": null,
  "colour": '#F4B400',
  "tooltip": "This is the main block of your project. You need it to login to your bot!",
  "helpUrl": ""
 };
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascript.javascriptGenerator.forBlock['base_main_constructor'] = function(block, generator) {
  var statements_name = generator.statementToCode(block, 'NAME');
  var value_token = generator.valueToCode(block, 'TOKEN', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `const { Client, IntentsBitField } = require("discord.js");
  const client = new Client({
    intents: [IntentsBitField.FLags.Guilds, IntentsBitField.FLAGS.GuildMessages, IntentsBitField.FLAGS.MessageContent, IntentsBitField.Flags.GuildMembers]
  });
  
  client.on("ready", () => {
    console.log("I am ready!");
  });
  
  ${statements_name}
  
  client.login("${value_token}");`;
  return code;
};
