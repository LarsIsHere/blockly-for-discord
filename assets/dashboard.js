

let CurrentPage;

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
        const parent = document.getElementById('content');
        const examplehtml = `              
        <div class="content-header" id="content-header">
          <h2>Dashboard</h2>
          <p>You can create, edit and delete Projects here</p>
        </div>
        <div class="content-nav" id="content-nav">
          <input spellcheck="false" class="default-input" type="text" placeholder="Search Project">
        
          
          <div style="display: flex">
          <div class="input-group mb-3">
                <span class="input-group-text default-input hover-fix" id="basic-addon1">@</span>
                <select class="form-select default-input right-binder" aria-label="Filter" data-bs-theme="dark" name="filter" id="filter">
            <option value="1" selected>Sort by All</option>
            <option value="2">Sort from A-Z</option>
            <option value="3">Sort by Date</option>
          </select>
              </div>

            <button class="button-base button-action left-binder">Create Project</button>
          </div>
        </div>
        <div class="content-seperator"></div>
        <div class="content-content">
          <div class="content-grid">
            <div class="project-card">
              <div class="card-img">
                <img class="card-img2" src="https://cdn.discordapp.com/avatars/816691475844694047/889e4aa22a1441ca6ff5ef15d8204aeb?size=1024" alt="">
              </div>
              <div class="card-other">
                <div><h2 class="card-title">Example Bot (1)</h2>
                  <p class="card-description">This is an example Description for an amazing bot</p>
                <p class="card-details">DiscordJS - 3942 Blocks</p>
              </div>
                
                <div><button id="open-project-btn" class="button-base button-action card-button">Open Project</button><button class="button-base button-default card-button-margin card-button">Manage</button></div>
                <script>
                  tippy('#open-project-btn', {
                    content: 'Your Project has been suspended',
                    placement: 'bottom',
                  });
                </script>
              </div>

              
            </div>
            <div class="project-card">

            </div>
            <div class="project-card">
              
            </div>
            <div class="project-card">
              
            </div>
            <div class="project-card">
              
            </div>
          </div>
        </div>
        `;
        parent.innerHTML = examplehtml;
        
        CurrentPage = "dashboard";
        break;
      case 'browse_projects':
        document.title = "B4D │ Browse Projects";

        break;
      case '404':
        document.title = "B4D │ 404";
      
    }
  }

  function SwitchPage(item) {
    LoadContent (item);
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


