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
  "tooltip": "",
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
  var code = `const { Client, Intents } = require("discord.js");
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });
  
  client.on("ready", () => {
    console.log("I am ready!");
  });
  
  ${statements_name}
  
  client.login("${value_token}");`;
  return code;
};
