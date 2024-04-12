document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("video");
  video.removeAttribute("controls"); // 재생버튼 제거
  video.loop = true; // 루프 설정
});
