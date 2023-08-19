const SimpleConstructorName = "base_simple_main_constructor";
 const SimpleConstructorData = {
    "message0": "Start bot with token %1",
    "args0": [
      {
        "type": "input_value",
        "name": "token"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
 };
Blockly.Blocks[SimpleConstructorName] = {
    init: function() {
        this.jsonInit(SimpleConstructorData);
    }
};

javascript.javascriptGenerator.forBlock['base_simple_main_constructor'] = function(block, generator) {
    var value_token = generator.valueToCode(block, 'token', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = `const { Client, Events, GatewayIntentBits } = require('discord.js');


    const client = new Client(
      {
        intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildPresences]
      });
    
    client.once(Events.ClientReady, c => {
      console.log("\`Ready! Logged in as \${c.user.tag} \`");
    });
    
    client.login(${value_token});\n`;
    return code;
  };
