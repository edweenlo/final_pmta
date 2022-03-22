//TAB JS
function openRegion(evt, regionName) {

    let i, tabcontent, tablinks;
    /* tab content */
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    /* tab buttons */
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* tab header */
    let tabHeader = document.querySelectorAll('.panel-left h3');
    for (i = 0; i < tabHeader.length; i++) {
      tabHeader[i].className = tabHeader[i].className += " active";
    }
    
    /* tab content */
    document.getElementById(regionName).style.display = "flex";
    
    
    evt.currentTarget.className += " active";
  }

//CURRENT/PREVIOUS

function openPrevious(region) {
  let prev = document.getElementsByClassName("previous");
  let tab = document.getElementsByClassName("prev-tab");

  switch(region) {
    case 'unitedStates':
      prev[0].classList.toggle("active");
      tab[0].classList.toggle("active");
      break;
    case 'latinAmerica':
      prev[1].classList.toggle("active");
      tab[1].classList.toggle("active");
      break;
    case 'canada':
      prev[2].classList.toggle("active");
      tab[2].classList.toggle("active");
      break;
    case 'middleEast':
      prev[3].classList.toggle("active");
      tab[3].classList.toggle("active");
      break;
    case 'tpd':
      prev[4].classList.toggle("active");
      tab[4].classList.toggle("active");
      break;
    case 'china':
      prev[5].classList.toggle("active");
      tab[5].classList.toggle("active");
      break;
  }
}
