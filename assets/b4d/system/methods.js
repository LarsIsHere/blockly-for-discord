var b4d = {
        progress: {

        },
        page: {

        }
    
};

let PageLoadBuffer = false;

let ProgressBarEnabled = true;
b4d.progress.start = function(Progress, MainText, AltText, inject) {
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


b4d.progress.set = function (value) {
    if (ProgressBarEnabled === true) {
      const progressBar = document.getElementById('loading-bar');
    progressBar.style.width = value + '%';
    } else {
      console.error("B4D - Progress Bar cannot be modified in this state")
    }
    
  }

b4d.page.GetCurrent = function (time = "now") {
  if (time === "now") {

  } else if (time === "last") {

  }
}
b4d.page.load = function (page = "home", force = false) {
  if (force === true) {

    SwitchPage(page);

  } else if (PageLoadBuffer === false) {

    SwitchPage(page);

  } else {
    console.error("B4D - Next page cannot be loaded. Try forcing page load with b4d.page.load(page, true)");
  }

}

function SwitchPage (page) {
  const LowerCasePage = page.toLowerCase();
  switch (LowerCasePage) {
    case 'home':
          
    // TODO: Add Functions and Injection


      
      break;
    case 'dashboard':
          
    // TODO: Add Functions and Injection

    LoadHeader("Dashboard", "You can create, edit and delete Projects here");
    LoadNav(`<input spellcheck="false" class="default-input" type="text" placeholder="Search Project">
              
                
    <div style="display: flex">
      <select id="examplee" class="default-input right-binder" name="filter" id="filter">
        <option value="all">Sort by All</option>
        <option value="date">Sort by Date</option>
      </select>
      
      <button class="button-base button-action left-binder">Create Project</button>
    </div>`);
    LoadMain (`                <div class="content-grid">
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
  </div>`, false, true);
    
      break;
    case 'browse':
          
    // TODO: Add Functions and Injection


      break;
              
    // TODO: Add Functions and Injection


    case '404':

      break;
    default: 
    console.error("B4D - No valid page was passed");
  }
}


function LoadHeader (title, description) {
  const HeaderElement = document.getElementById("content-header");
  HeaderElement.innerHTML = `<h2>${title}</h2>
  <p>${description}</p>`;
}

function LoadNav (HtmlInjection) {
  const ParentElement = document.getElementById("content");
  ParentElement.innerHTML = ParentElement.innerHTML + `<div class="content-nav" id="content-nav">${HtmlInjection}<div>`;
}

function LoadMain (html, preloader, seperator) {
  const element = document.getElementById('content-content');

/*  if (element) {
    if (seperator === true) {
      element.innerHTML = `<div class="content-seperator"></div><div class="content-content"></div>`;
    } else {
      element.innerHTML = `<div class="content-content"></div>`;
    }
    
  } */
  if (preloader === true) {

    // TODO: Make preloader 

    const ContentElement = document.getElementById('content-content');
    ContentElement.innerHTML = html;
  } else {
    const ContentElement = document.getElementById('content-content');
    ContentElement.innerHTML = html;
  }
}