let share = document.getElementById('share');
let profile = document.getElementById('profile');
let profileWrapper = document.getElementById('profile-wrapper');
let mediaWrapper = document.getElementById('media-wrapper');

function openTooltip(){
    if(media.matches){
        // profile.style.background="#49566a"
        
        share.style.visibility = "hidden";
        profile.classList.toggle(['bg-white']);
        profile.classList.toggle(['bg-primary']);
        profileWrapper.classList.toggle(['d-flex']);
        profileWrapper.classList.toggle(['d-none']);
        mediaWrapper.classList.toggle(['d-none']);
        mediaWrapper.classList.toggle(['d-flex']);
    }else{
        if (share.style.visibility === "visible") {
            share.style.visibility = "hidden";
          } else {
            share.style.visibility = "visible";
          }

    }
}
var media = window.matchMedia("(max-width: 768px)");
media.addListener(openTooltip);