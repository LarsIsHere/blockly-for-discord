const website_set_header_name = 'website_set_header';

const website_set_header_data = {
  "message0": "Set %1 to %2 in header",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "Set header on response",
  "helpUrl": ""
}

b4d.register(website_set_header_name, website_set_header_data)

javascript.javascriptGenerator.forBlock[website_set_header_name] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'name', javascript.Order.ATOMIC);
  var value_value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
  return `res.header(${value_name}, ${value_value});\n`
};
