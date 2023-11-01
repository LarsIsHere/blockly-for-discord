const website_status_code_name = 'website_status_code';

const website_status_code_data = {
  "message0": "Set status code to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "Set status code on response",
  "helpUrl": ""
}

b4d.register(website_status_code_name, website_status_code_data)

javascript.javascriptGenerator.forBlock[website_status_code_name] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  return `res.status(Number(${value_text}));\n`
};
