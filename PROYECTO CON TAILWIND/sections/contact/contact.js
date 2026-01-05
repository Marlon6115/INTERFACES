const track = document.getElementById("poster-carousel");
const DURATION = 25;
function setupInfiniteCarousel() {
  console.log("Setting up infinite carousel");
  if (!track) return;

  const allPosters = Array.from(track.children);

  const originalSetLength = allPosters.length / 2;

  let displacement = 0;

  allPosters.slice(0, originalSetLength).forEach((poster) => {
    displacement += poster.offsetWidth;
  });

  if (displacement === 0) {
    setTimeout(setupInfiniteCarousel, 100);
    return;
  }

  const keyframes = `
      @keyframes scrollX {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${displacement}px); }
      }
    `;

  const existingStyle = document.getElementById("carousel-style");
  if (existingStyle) existingStyle.remove();

  const styleSheet = document.createElement("style");
  styleSheet.id = "carousel-style";
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

  track.style.width = "max-content";
  track.style.animation = `scrollX ${DURATION}s linear infinite`;
}

setTimeout(setupInfiniteCarousel, 100);

window.addEventListener("resize", () => {
  setTimeout(setupInfiniteCarousel, 100);
});
