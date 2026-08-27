(function () {
  const header = document.querySelector<HTMLElement>('.masthead');
  const nav = document.getElementById('menu');
  if (!header) return;

  const threshold = 8;
  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const delta = y - lastY;
    lastY = y;

    const menuOpen = nav?.classList.contains('is-open') ?? false;
    const nearTop = y < header.offsetHeight;

    if (menuOpen || nearTop) {
      header.classList.remove('is-hidden');
    } else if (delta > threshold) {
      header.classList.add('is-hidden');
    } else if (delta < -threshold) {
      header.classList.remove('is-hidden');
    }
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
})();