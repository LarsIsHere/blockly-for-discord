function WarningModal (message, duration, pos1="bottom", pos2="center") {
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
}

function SucessModal (message, duration, pos1="bottom", pos2="center") {
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
}