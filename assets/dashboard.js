

let CurrentPage;

const router = {
    "/": {
      "dest" : "dashboard"
    },
    "browse": {
      "dest" : "browse_projects"
    },
    "projects": {
      "dest" : "projects"
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
    const parent = document.getElementById('content');
    switch(item) {
      case 'projects':
        document.title = "B4D │ My Projects";
        const examplehtml = `              
        <div class="content-header" id="content-header">
          <h2>My Projects</h2>
          <p>You can create, edit and delete Projects here</p>
        </div>
        <div class="content-nav" id="content-nav">
          <input spellcheck="false" class="default-input" type="text" placeholder="Search Project">
        
          
          <div style="display: flex">
          <div class="input-group mb-3">
                <span class="input-group-text default-input hover-fix" id="basic-addon1">Sort by</span>
                <select class="form-select default-input right-binder" aria-label="Filter" data-bs-theme="dark" name="filter" id="filter">
            <option value="1" selected>All</option>
            <option value="2">A - Z</option>
            <option value="3">Date</option>
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
        
        CurrentPage = "projects";

        history.pushState({}, '', '/dashboard/projects');
        removeActiveClass();
        const button2 = getElementById('dashboard');
        button2.classList.add('active');
        break;

        case 'dashboard':
          document.title = "B4D │ Dashboard";
          const dashboardHTML = `             <div class="content-header" id="content-header">
          <h2>Dashboard</h2>
          <p>All the things you want to do in one place</p>
          <div class="content-seperator"></div>
          
        </div>
        <div class="content-dash" id="content-dash">
          <div style="text-align: center;">
            <h1 class="shortcuttext">Shortcuts</h1>
            <h3 class="shortcuttext">Shortcuts to get you started quickly</h3>
          </div>
          <div class="quickmenu">
            <div style="display: flex; flex-direction: row; justify-content: center; height: 100%;">
              <div class="quickitem quickleft">
                <div><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div>
                <div>
                  <h3>Create Project</h3>
                  <p>Create a new Project to get started</p>
                </div>
              </div>
              <div class="quickitem quickright">
                <div><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v80Zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380q0-75 52.5-127.5T620-560q75 0 127.5 52.5T800-380q0 27-8 51t-20 45l128 128-56 56ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/></svg></div>
                <div>
                  <h3>Find Projects</h3>
                  <p>Find projects other people have created</p>
                </div>
              </div>
            </div>
            <div>
              <div class="alert alert-primary" role="alert" style="margin-bottom: 0px;" data-bs-theme="dark">Having trouble finding your way? Join our <a href="https://discord.gg/77XrD6UTB3" target="_blank" class="alert-link">discord server</a> to get help or <strong>start the tour</strong>.</div>
          </div>
          </div>
        </div>
          </div>
        </div>
        
        
        ` ;

        parent.innerHTML = dashboardHTML;
        CurrentPage = "dashboard";

        history.pushState({}, '', '/dashboard');
        removeActiveClass();
        const button = getElementById('home');
        button.classList.add('active');

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


function showDialog() {
  var dialog = document.getElementById('dialog');
  var modal = document.getElementById('b4d-modal');
  if (dialog) {
    dialog.style.display = 'flex';
    setTimeout(function () {
      dialog.classList.add('visible2');
    }, 100);
    setTimeout(function () {
      modal.classList.add('visible2');
    }, 300);
  }
}


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function hideDialog() {
  var dialog = document.getElementById('dialog');
  var modal = document.getElementById('b4d-modal');
  if (dialog) {
    modal.classList.remove('visible2');
    await delay(500);
    dialog.classList.remove('visible2');
    await delay(500);
    dialog.style.display = 'none';
  }
}


function LoadPreloader (div) {
  const ParentElement = document.getElementById(div);
  ParentElement.innerHTML = `<div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div>`;

}





const menu = document.getElementById('menu');
const elements = menuFirst.querySelectorAll('*');

function removeActiveClass() {
  elements.forEach(function(element) {
    element.classList.remove('active');
  });
}