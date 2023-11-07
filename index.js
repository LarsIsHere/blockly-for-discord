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
    
    const parts = windows.location.pathname.split('/dashboard/')[1];
    const first_path = parts.split('/')[0];
    if (window.location.pathname === '/dashboard' || window.location.pathname === '/dashboard/') {
      LoadContent(router["/"].dest);
      
    } else if (router[first_path]) {
        LoadContent(router[first_path].dest);
    } else {
      LoadContent(router["404"].dest);
    }
  });
  
  function LoadContent (item) {
    switch(item) {
      case 'dashboard':
        console.log("dashboard");
        break;
      case 'browse':
        console.log("browse");
        break;
      
    }
  }