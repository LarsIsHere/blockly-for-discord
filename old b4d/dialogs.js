  function setDefault(dropdown, value) {
    for(var i, j = 0; i = dropdown.options[j]; j++) {
      if(i.value == value) {
        dropdown.selectedIndex = j;
        break;
      }
    }
  }

  function settingsOpen() {
    setDefault(document.getElementById('themedrop'), localStorage.getItem("theme"));
    setDefault(document.getElementById('renderdrop'), localStorage.getItem("renderer"));
    document.getElementById("settings").showModal();
  }
  function settingsClose() {
    document.getElementById("settings").close();
  }
