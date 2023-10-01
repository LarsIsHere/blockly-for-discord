const website_start_name = 'website_start';

const website_start_data = {
  "message0": "Start website in port %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "port",
      "check": "Number"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 195,
  "tooltip": "Starts a website using express",
  "helpUrl": ""
}

b4d.register(website_start_name, website_start_data)

javascript.javascriptGenerator.forBlock[website_start_name] = function(block, generator) {
  var value_port = generator.valueToCode(block, 'port', javascript.Order.ATOMIC);
  var statements_name = generator.statementToCode(block, 'NAME');
  return `// Website imports
const express = require('express')
const express_bodyParser = require('body-parser');
const express_cors = require('cors');
var express_path = require('path');
const express_app = express();

express_app.use(express_cors());
express_app.use(express_bodyParser.urlencoded({
  extended: false
}));
express_app.use(express_bodyParser.json());

// Actual website
${statements_name}

// Start website
express_app.listen(${value_port}).then(e => {
  console.log("Website started at port ${value_port}")
});\n`
};
