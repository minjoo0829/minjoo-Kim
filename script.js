const video = document.getElementById("myVideo");
const button = document.getElementById("myButton");

// 모바일 첫 터치 시 video 재생
const playVideo = () => {
  video.play().catch(() => {
    console.log("Autoplay blocked, user interaction required.");
  });
  document.removeEventListener('touchstart', playVideo);
};
document.addEventListener('touchstart', playVideo, { once: true });

// 버튼 클릭 시 video 재생 + 페이지 이동
button.addEventListener("click", () => {
  video.play();
  window.location.href = "https://minjeyeskim.cargo.site";
});
