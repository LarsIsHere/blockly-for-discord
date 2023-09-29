
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
  var blockthemef = localStorage.getItem("blocktheme")
  
  const blockdropdown = document.getElementById('blockthemedrop');
  blockdropdown.addEventListener('change', function() {

    const selectedValuet = blockdropdown.value;
    localStorage.setItem("blocktheme", selectedValuet);
    
    

  });

  if (localStorage.getItem("plugin_backpack") === null) {
    localStorage.setItem("plugin_backpack", "true");
  }

  const backpack_check = document.getElementById('switch-plugin-b');
  backpack_check.addEventListener('change', function() {
    if (backpack_check.checked) {
      localStorage.setItem("plugin_backpack", "true");
      
      backpack_check.checked = true;
    } else {
      localStorage.setItem("plugin_backpack", "false");
      backpack_check.checked = false;
    }
    
  });
  if (localStorage.getItem("plugin_ctoolbox") === null) {
    localStorage.setItem("plugin_ctoolbox", "false");
  }
  const ctoolbox_check = document.getElementById('switch-plugin-ct');
  ctoolbox_check.disabled = true;
    ctoolbox_check.addEventListener('change', function() {
    if (ctoolbox_check.checked) {
      localStorage.setItem("plugin_ctoolbox", "true");
      ctoolbox_check.checked = true;
    } else {
      localStorage.setItem("plugin_ctoolbox", "false");
      ctoolbox_check.checked = false;
    }

  });

  const injectOptions = {
    toolbox: document.getElementById('toolbox-categories'),
    renderer: rendererc,
    CORNER_RADIUS: 20,
    theme: blockthemef,
    /* grid:
         {spacing: 20,
          length: 0,
          colour: '#212529',
          snap: true}, */
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
      pinch: true,
    },
    trashcan: true,
  };
  if (localStorage.getItem("plugin_ctoolbox") == "true") {
    ctoolbox_check.checked = true;
   /* injectOptions.plugins = {
      'toolbox': ContinuousToolbox,
      'flyoutsVerticalToolbox': ContinuousFlyout,
      'metricsManager': ContinuousMetrics,
    }; */
  } else {
    ctoolbox_check.checked = false;
  }
  //injection @Blockly lib
  workspace = Blockly.inject('blocklyDiv', injectOptions);

    const options = {
      contextMenu: true,
      shortcut: true,
    }
    if (localStorage.getItem("plugin_backpack") == "true") {
      backpack_check.checked = true;
      const backpack = new Backpack(workspace);
      backpack.init();
    } else {
      backpack_check.checked = false;
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

    document.getElementById('importp').addEventListener("click", () => {
      var inputElement = document.createElement("input");
      inputElement.type = "file";
    
      // Define a function to handle the file selection
      inputElement.addEventListener("change", (event) => {
        var file = event.target.files[0]; // Get the selected file
    
        if (file) {
          var reader = new FileReader();
    
          reader.onload = function (e) {
            try {
              var xmlTexte = e.target.result; // Get the XML content as text
    
              // Create a new Blockly workspace
    
              // Load the Blockly workspace with the parsed XML
              var xmlDome = Blockly.utils.xml.textToDom(xmlTexte);
              const response = confirm("Do you wish to clear the workspace before importing?");
              if (response) {
                workspace.clear();
              }
              Blockly.Xml.domToWorkspace(xmlDome, workspace);
              var fileName = file.name;
              b4d.success("Imported " + fileName + " successfully", 3000, "bottom", "center")
            } catch (error) {
              console.log(error);
              var fileName = file.name;
              b4d.warn("Error importing " + fileName +", look in the console for more information", 3000, "bottom", "center")
            }
          };
    
          reader.readAsText(file); // Read the file as text
        }
      });
    
      // Trigger the file input dialog when this input element is clicked
      inputElement.click();
    });
} 

function changeTheme(themeName) {
  // Get the theme link element by its ID
  const themeLink = document.getElementById('theme-link');

  // Change the href attribute to the selected theme's CSS file
  themeLink.href = `${themeName}.css`;
}

function Collab() {
  WarningModal ("This is currently still being developed and not ready for use.", 2000);
}

function checkMobile() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


function screenshotspace() {
  let div =
  document.getElementById('#blocklyDiv');

// Use the html2canvas
html2canvas(div).then(
  function (canvas) {
      document
      .getElementById('output')
      .appendChild(canvas);
      var containerCanvas = document.getElementById('output').querySelector('canvas');
var downloadLink = document.createElement('a');

downloadLink.href = containerCanvas.toDataURL('image/png');

downloadLink.download = 'screenshot.png';

downloadLink.click();
  })
}

function cleanup () {
  workspace.cleanUp();
}


document.addEventListener("DOMContentLoaded", function() {
  const parentdiv = document.getElementById("parentmarket");

        fetch('https://blockly-for-discord.xyz/market/extensions.json')
            .then(response => response.json())
            .then(jsonData => {
                for (const key in jsonData) {
                    if (jsonData.hasOwnProperty(key)) {
                        const item = jsonData[key];
                        var list = item.Blocks;
                        const div = document.createElement("div");
                        if (item.Dependencies && item.Dependencies.length > 0) {
                          var modifiedContent = item.Dependencies.replace(/,/g, '<br>');
                          
                          var result = 'Dependencies:<br>' + modifiedContent;
                        }
                        else {
                          var result = "";
                        }
                        div.className = "market-item";
                        div.innerHTML = `
                            <div class="market-banner">
                                <img src="${item.banner}" class="market-image" loading="lazy">
                            </div>
                            <h1>${key}</h1>
                            <p>${item.Description}</p>
                            <p style="color:gray;">${result}</p>
                            <button onclick="b4d.extension.load(['${list.join(`','`)}'], '${key}', '${item.Color}', '${item.Category}', '${item.Dependencies}')" class="market-button" id="${key}">Add to Toolbox</button>
                        `;
                        parentdiv.appendChild(div);
                    }
                }
            })
});