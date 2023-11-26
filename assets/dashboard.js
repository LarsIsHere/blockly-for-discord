



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
        b4d.page.load("dashboard", false);
        break;
      case 'browse_projects':
        document.title = "B4D │ Browse Projects";

        break;
      case '404':
        document.title = "B4D │ 404";
      
    }
  }



  document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
    const fadeOutDiv = document.getElementById('preloader');
    
    fadeOutDiv.style.opacity = '0';
    
    fadeOutDiv.addEventListener('transitionend', function() {
      fadeOutDiv.style.display = 'none';
    });
  }, 2000);
  });

  
  
  function showDiv(Progress, MainText, AltText, inject) {
    if (Progress === true) {
      ProgressBarEnabled = true;
    } else {
      ProgressBarEnabled = false;
    }
    const LoadingPrincipal = document.getElementById('loading-text');
    LoadingPrincipal.textContent = MainText;
    
      const LoadingSecondary = document.getElementById('loading-alt');
      LoadingSecondary.textContent = AltText;
    
    if (!inject === undefined) {
      const LoadingSecondary = document.getElementById('loading-alt');
      LoadingSecondary.innerHTML = inject;
    }
    const bottomDiv = document.getElementById('loadingel');
    bottomDiv.classList.add('appear');
  }
  
  function hideDiv() {
    const bottomDiv = document.getElementById('loadingel');
    bottomDiv.classList.remove('appear');
  }
  
  function toggleDiv() {
    const bottomDiv = document.getElementById('loadingel');
    bottomDiv.classList.toggle('appear');
  }


