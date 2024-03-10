var video = document.getElementById("video");
function playVideoWhenLoaded() {
    video.play();
}
video.addEventListener('canplaythrough', playVideoWhenLoaded);