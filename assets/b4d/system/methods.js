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

