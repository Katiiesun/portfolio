export default function initSmoothScroll() {
    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.08;
  
    function smoothScroll() {
      currentScroll += (targetScroll - currentScroll) * ease;
      window.scrollTo(0, currentScroll);
      requestAnimationFrame(smoothScroll);
    }
  
    window.addEventListener("scroll", () => {
      targetScroll = window.scrollY;
    });
  
    smoothScroll();
  }
  