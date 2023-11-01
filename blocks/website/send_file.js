const website_send_file_name = 'website_send_file';

const website_send_file_data = {
  "message0": "Respond with file %1",
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

b4d.register(website_send_file_name, website_send_file_data)

javascript.javascriptGenerator.forBlock[website_send_file_name] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
  return `res.sendFile(express_path.join(__dirname, String(${value_text})));\n`
};
