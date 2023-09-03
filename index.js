
'use strict';

let workspace = null;

function start() {

  const dropdown = document.getElementById('themedrop');
  dropdown.addEventListener('change', function() {

    const selectedValue = dropdown.value;
    localStorage.setItem("theme", selectedValue);
    changeTheme(selectedValue)
  });
  
  const renderdropdown = document.getElementById('renderdrop');
  renderdropdown.addEventListener('change', function() {

    const selectedValuer = renderdropdown.value;
    localStorage.setItem("renderer", selectedValuer);
  });

  var rendererc = localStorage.getItem("renderer")

  //injection @Blockly lib
  workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox-categories'),
      renderer: rendererc,
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
    workspaceSearch.init();
    workspaceSearch.open();
    Toastify({
      text: "If this is your main index.js file please add a 'start bot' block.",
      duration: 7000,
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
    document.getElementsByClassName("blockly-ws-search-close-btn")[0].remove();
    document.getElementsByClassName("blockly-ws-search-next-btn")[0].remove();
    document.getElementsByClassName("blockly-ws-search-previous-btn")[0].remove();


} 

  
function changeTheme(themeName) {
  // Get the theme link element by its ID
  const themeLink = document.getElementById('theme-link');

  // Change the href attribute to the selected theme's CSS file
  themeLink.href = `${themeName}.css`;
}