import Toastify from 'toastify-js'

const router = {
    "/": {
      "dest" : "dashboard"
    },
    "browse": {
      "dest" : "browse_projects"
    },
    "404": {
      "dest" : "404"
    }
  };
  
  
  document.addEventListener('DOMContentLoaded', function() {
    
    
    if (window.location.pathname === '/dashboard' || window.location.pathname === '/dashboard/') {
      LoadContent(router["/"].dest);
    } else {
      const parts = window.location.pathname.split('/dashboard/')[1];
      const first_path = parts.split('/')[0];
      if (router[first_path]) {
        LoadContent(router[first_path].dest);
      } else {
        LoadContent(router["404"].dest);
      }
    }
  });
  
  function LoadContent (item) {
    switch(item) {
      case 'dashboard':
        document.title = "B4D │ Dashboard";
        
        break;
      case 'browse_projects':
        document.title = "B4D │ Browse Projects";

        break;
      case '404':
        document.title = "B4D │ 404";
      
    }
  }



  document.addEventListener('DOMContentLoaded', function() {
    // Get the div element
    setTimeout(function() {
    const fadeOutDiv = document.getElementById('preloader');
    
    // Gradually decrease opacity
    fadeOutDiv.style.opacity = '0';
    
    // Set display to none after opacity transition ends
    fadeOutDiv.addEventListener('transitionend', function() {
      fadeOutDiv.style.display = 'none';
    });
  }, 2000);
  });


  Toastify({
    text: "This is a toast",
    duration: 12000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();