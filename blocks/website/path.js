const website_path_name = 'website_path';

const website_path_data = {
  "message0": "On request to %1 of type %2 do %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "get",
          "get"
        ],
        [
          "post",
          "post"
        ],
        [
          "put",
          "put"
        ],
        [
          "delete",
          "delete"
        ],
        [
          "any",
          "all"
        ]
      ]
    },
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
  "tooltip": "On request to path do something",
  "helpUrl": ""
}

b4d.register(website_path_name, website_path_data)

javascript.javascriptGenerator.forBlock[website_path_name] = function(block, generator) {
  var value_path = generator.valueToCode(block, 'path', javascript.Order.ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = generator.statementToCode(block, 'NAME');
  return `express_app.${dropdown_name.replaceAll("'","")}(${value_path.replaceAll(" ","-")}, async function(req, res) {
${statements_name}
});\n`
};
