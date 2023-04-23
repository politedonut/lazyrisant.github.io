
document.addEventListener("DOMContentLoaded", function() {
    var videoPopup = document.getElementById("video-popup");
    var videoPlayer = document.getElementById("video-player");
  
   
    videoPopup.style.display = "block";
  
    setTimeout(function() {
      videoPopup.style.display = "none";
      videoPlayer.pause();
    }, 5000);
  });
  

