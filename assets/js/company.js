(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const syncHeader = () => header?.classList.toggle('scrolled', window.scrollY > 32);
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }));

  document.querySelector('[data-year]').textContent = new Date().getFullYear();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    reveals.forEach((element) => observer.observe(element));
  }

  const canvas = document.getElementById('quantum-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  const pointer = { x: 0, y: 0 };
  let width = 0, height = 0, ratio = 1, frame = 0, particles = [];
  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, bounds.width); height = Math.max(1, bounds.height);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(24, Math.min(54, Math.round(width / 9)));
    particles = Array.from({ length: count }, (_, index) => ({
      angle: (index / count) * Math.PI * 2,
      radius: 55 + Math.random() * Math.min(width, height) * .39,
      speed: .00025 + Math.random() * .00045,
      phase: Math.random() * Math.PI * 2,
      size: Math.random() > .83 ? 2.2 : 1
    }));
  };
  const draw = (time = 0) => {
    context.clearRect(0, 0, width, height);
    const centerX = width / 2 + pointer.x * 12;
    const centerY = height * .49 + pointer.y * 12;
    const points = particles.map((particle) => {
      const angle = particle.angle + time * particle.speed;
      const wave = Math.sin(time * .0007 + particle.phase) * 8;
      return { x: centerX + Math.cos(angle) * (particle.radius + wave) * .72, y: centerY + Math.sin(angle) * (particle.radius + wave), size: particle.size };
    });
    context.lineWidth = .55;
    points.forEach((point, i) => {
      points.slice(i + 1).forEach((other) => {
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 92) {
          context.strokeStyle = `rgba(184,255,44,${.22 * (1 - distance / 92)})`;
          context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke();
        }
      });
      context.fillStyle = i % 9 === 0 ? '#b8ff2c' : 'rgba(242,241,237,.66)';
      context.beginPath(); context.arc(point.x, point.y, point.size, 0, Math.PI * 2); context.fill();
    });
    if (!reducedMotion) frame = requestAnimationFrame(draw);
  };
  canvas.addEventListener('pointermove', (event) => {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = (event.clientX - bounds.left) / bounds.width - .5;
    pointer.y = (event.clientY - bounds.top) / bounds.height - .5;
  });
  canvas.addEventListener('pointerleave', () => { pointer.x = 0; pointer.y = 0; });
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else if (!reducedMotion) frame = requestAnimationFrame(draw);
  });
  resize(); draw();
})();
