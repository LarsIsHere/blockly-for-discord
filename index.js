
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

    const options = {
      contextMenu: true,
      shortcut: true,
    }
    const plugin = new CrossTabCopyPaste();
    plugin.init(options, () => {
    console.log('Use this error callback to handle TypeError while pasting');
  });

    Blockly.VerticalFlyout.prototype.getFlyoutScale = function() {
      return 1;
    };

    workspace.addChangeListener(Blockly.Events.disableOrphans);
    const workspaceSearch = new WorkspaceSearch(workspace);
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    workspaceSearch.init();
    workspaceSearch.open();
    Toastify({
      text: "If this is your main index.js file please add a 'start bot' block.",
      duration: 7000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: false,
      gravity: "bottom", 
      position: "center", 
      stopOnFocus: true, 
      style: {
        background: "#E49B0F",
      },
      onClick: function(){} 
    }).showToast();
}
