


'use strict';

let workspace = null;

function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox-categories'),
      renderer: 'zelos',
      CORNER_RADIUS: 20,
      zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true},
     trashcan: true
    });
    Blockly.VerticalFlyout.prototype.getFlyoutScale = function() {
      return 1;
    };
    
}

