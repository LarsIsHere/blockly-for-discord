const EventsinvalidRequestWarningName = "invalidRequestWarning";
 const EventsinvalidRequestWarningData = {
    "message0": "When a Invalid Request warning is received %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Event"
      }
    ],
   "colour": "#ffa200",
    "tooltip": "Emitted periodically when the process sends invalid requests to let users avoid the 10k invalid requests in 10 minutes threshold that causes a ban.",
    "helpUrl": ""
 };
Blockly.Blocks[invalidRequestWarningName] = {
    init: function() {
        this.jsonInit(invalidRequestWarningData);
    }
};
javascript.javascriptGenerator.forBlock['invalidRequestWarning'] = function(block, generator) {
    var statements_event = generator.statementToCode(block, 'Event');
    var code = `client.on('invalidRequestWarning', (invalidRequestWarningData) => {
    ${statements_event}
});\n`;
            return code;
          };