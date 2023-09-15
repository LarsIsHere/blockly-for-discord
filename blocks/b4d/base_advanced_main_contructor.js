const ConstructorName = "base_advanced_main_constructor";
 const ConstructorData = {
    "message0": "Start bot with token %1 Listen to Events %2 Mobile? %3",
    "args0": [
      {
        "type": "input_value",
        "name": "token"
      },
      {
        "type": "input_value",
        "name": "intents",
        "check": "Array"
      },
      {
        "type": "field_checkbox",
        "name": "mobile",
        "checked": false
      }
    ],
    "inputsInline": false,
    "colour": "#009dff",
    "tooltip": "Use this block if you want more control over your bot and the events that it's going to receive.",
    "helpUrl": ""
 };
Blockly.Blocks[ConstructorName] = {
    init: function() {
        this.jsonInit(ConstructorData);
    }
};

javascript.javascriptGenerator.forBlock['base_advanced_main_constructor'] = function(block, generator) {
  var value_token = generator.valueToCode(block, 'token', javascript.Order.ATOMIC);
  var value_intents = generator.valueToCode(block, 'intents', javascript.Order.ATOMIC);
  var value_mobile = block.getFieldValue('mobile') === 'TRUE';
  // TODO: Assemble javascript into code variable.
  var code = `const { Client, Events, GatewayIntentBits } = require('discord.js');


  const client = new Client(
    {
      intents: ${value_intents}${value_mobile ? ',\n      ws: { properties: { browser: "Discord iOS" }}':''}
    });
  
  client.once(Events.ClientReady, c => {
    console.log(\`Ready! Logged in as \${c.user.tag} \`);
  });
  
  client.login(${value_token});\n`;
  return code;
};
