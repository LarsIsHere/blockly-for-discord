const website_send_text_name = 'website_send_text';

const website_send_text_data = {
  "message0": "Respond with text %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "Respond with text",
  "helpUrl": ""
}

b4d.register(website_send_text_name, website_send_text_data)

javascript.javascriptGenerator.forBlock[website_send_text_name] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  return `res.send(String(${value_text}));\n`
};
