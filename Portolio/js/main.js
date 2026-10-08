(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = document.querySelectorAll('[data-n]');

  const showFinal = (n) => { n.textContent = n.dataset.n + (n.dataset.plus ? '+' : ''); };

  const count = (n) => {
    const target = +n.dataset.n;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1400, 1);
      n.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick); else showFinal(n);
    };
    requestAnimationFrame(tick);
  };

  // scroll reveal + counters
  if (!reduce && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll('[data-n]').forEach(count);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.rv').forEach((el, i) => {
      if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', (i % 4) * 0.07 + 's');
      io.observe(el);
    });
  } else {
    counters.forEach(showFinal);
  }

  // scroll progress bar
  const bar = document.getElementById('progress');
  if (bar && !reduce) {
    addEventListener('scroll', () => {
      const h = document.documentElement;
      bar.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
    }, { passive: true });
  }
})();
