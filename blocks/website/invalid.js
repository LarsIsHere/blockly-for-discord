const website_invalid_name = 'website_invalid';

const website_invalid_data = {
  "message0": "On non handeled request do %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "On non handeled request do something",
  "helpUrl": ""
}

b4d.register(website_invalid_name, website_invalid_data)

javascript.javascriptGenerator.forBlock[website_invalid_name] = function(block, generator) {
  var statements_name = generator.statementToCode(block, 'NAME');
  return `express_app.use(function(req, res) {
${statements_name}
});\n`
};
