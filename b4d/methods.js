var b4d = {};
b4d.dialog = {};

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