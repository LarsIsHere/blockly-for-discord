const website_send_object_name = 'website_send_object';

const website_send_object_data = {
  "message0": "Respond with object %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "Object"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "Respond with object",
  "helpUrl": ""
}

b4d.register(website_send_object_name, website_send_object_data)

javascript.javascriptGenerator.forBlock[website_send_object_name] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  return `res.json(${value_text});\n`
};
