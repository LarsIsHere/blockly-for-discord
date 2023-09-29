var b4d = {};
b4d.dialog = {};
b4d.extension = {};

b4d.register = function(Name, Data) {
    Blockly.Blocks[Name] = {
        init: function() {
            this.jsonInit(Data);
        }
    };
}

b4d.blocks = function() {
  return Blockly.Blocks;
  
};

b4d.warn = function(message, duration, pos1="bottom", pos2="center") {
    Toastify({
        text: message,
        duration: duration,
        newWindow: true,
        close: false,
        gravity: pos1, 
        position: pos2, 
        stopOnFocus: true, 
        style: {
          background: "#db1f48",
        },
        onClick: function(){} 
      }).showToast();
};

b4d.success = function(message, duration, pos1="bottom", pos2="center") {
    Toastify({
        text: message,
        duration: duration,
        newWindow: true,
        close: false,
        gravity: pos1, 
        position: pos2, 
        stopOnFocus: true, 
        style: {
          background: "#3CB371",
        },
        onClick: function(){} 
      }).showToast();
  };

  b4d.dialog.close = function(id){
    document.getElementById(id).close();
  };

  b4d.dialog.open = function(id){
    document.getElementById(id).showModal();
  }

  b4d.extension.load = function(blocks, name, color, category, dep="null"){
    var disable = document.getElementById(name);
disable.disabled = true;
disable.innerText = "Already in the Toolbox";
    const itemList = dep.split(',');
    itemList.forEach(item => {
      const buttonId = item.trim();
      const button = document.getElementById(buttonId);
  
      if (button) {
        button.click();
      } else {
        console.warn(`Dependency "${buttonId}" not found.`);
        b4d.warn("Dependency "+ buttonId + " was not found", 4000);
      }
    });
    try {
    var xmlresult = "";
    blocks.forEach(function(block) {
      if (block.includes("label.")) {
        var label = block.replace("label.","")
        var labelresult = `<label text="${label}"></label>\n`;
        xmlresult = xmlresult + labelresult;
      } else {
        var result = `<block type="${block}"></block>\n`;
        xmlresult = xmlresult + result;
      }
    });
    let newXML = '<category name="' + category + '" colour="' + color + '">';
let completeXML = "<xml>"+document.getElementById("toolbox-categories").innerHTML.replaceAll("\n","")+newXML+xmlresult+"</category></xml>";
document.getElementById("toolbox-categories").innerHTML = completeXML.replace("<xml>","").replace("</xml>","")
workspace.updateToolbox(Blockly.utils.xml.textToDom(completeXML));
} catch (error) {
  console.error(error);
  b4d.warn("Something went wrong while importing. Check the console for more information", 4000);
}
  }