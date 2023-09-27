const PterodactylRequireName = "ptero_require";
 const PterodactylRequireData = {
    "message0": "Require PteroSocket",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45,
    "tooltip": "",
    "helpUrl": ""
 };
 javascript.javascriptGenerator.forBlock['ptero_require'] = function(block, generator) {
    var code = `const { pterosocket } = require('pterosocket')\n`;
    return code;
  };

 const PterodactylAuthName = "ptero_auth";
 const PterodactylAuthData = {
    "message0": "Authenticate with %1 Domain %2 API Key %3 Server ID %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "origin"
      },
      {
        "type": "input_value",
        "name": "api_key"
      },
      {
        "type": "input_value",
        "name": "server_no"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
 };

javascript.javascriptGenerator.forBlock['ptero_auth'] = function(block, generator) {
  var value_origin = generator.valueToCode(block, 'origin', javascript.Order.ATOMIC);
  var value_api_key = generator.valueToCode(block, 'api_key', javascript.Order.ATOMIC);
  var value_server_no = generator.valueToCode(block, 'server_no', javascript.Order.ATOMIC);
  var code = `const origin = "${value_origin}";
  const api_key = "${value_api_key}";
  const server_no = "${value_server_no}";\n`;
  return code;
};
b4d.register(PterodactylAuthName, PterodactylAuthData);
b4d.register(PterodactylRequireName, PterodactylRequireData);