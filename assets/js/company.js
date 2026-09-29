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
    nav?.classList.toggle('open', open);
    header?.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    header?.classList.remove('menu-open');
    document.body.style.overflow = '';
  }));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

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
    }, { threshold: .11 });
    reveals.forEach((element) => observer.observe(element));
  }

  const fitCanvas = (canvas, context) => {
    const bounds = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(bounds.width * ratio));
    canvas.height = Math.max(1, Math.round(bounds.height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    return { width: bounds.width, height: bounds.height };
  };

  const fieldCanvas = document.getElementById('field-canvas');
  if (fieldCanvas) {
    const context = fieldCanvas.getContext('2d');
    let fieldSize = { width: 1, height: 1 };
    let fieldFrame = 0;
    const resizeField = () => { fieldSize = fitCanvas(fieldCanvas, context); };
    const drawField = (time = 0) => {
      const { width, height } = fieldSize;
      context.clearRect(0, 0, width, height);
      const cell = Math.max(25, width / 14);
      const shift = reducedMotion ? 0 : Math.sin(time * .00042) * cell * .16;
      const radius = cell * .34;

      for (let row = -1; row < Math.ceil(height / cell) + 1; row += 1) {
        for (let column = -1; column < Math.ceil(width / cell) + 1; column += 1) {
          const x = column * cell + shift;
          const y = row * cell - shift;
          const alternating = (row + column) % 2 === 0;
          const alpha = alternating ? .68 : .2;
          const glow = context.createRadialGradient(x, y, 0, x, y, radius * 2.4);
          glow.addColorStop(0, `rgba(117,225,223,${alpha})`);
          glow.addColorStop(.22, `rgba(8,190,198,${alpha * .36})`);
          glow.addColorStop(1, 'rgba(8,190,198,0)');
          context.fillStyle = glow;
          context.beginPath();
          context.arc(x, y, radius * 2.4, 0, Math.PI * 2);
          context.fill();
          context.fillStyle = alternating ? 'rgba(238,255,255,.72)' : 'rgba(8,190,198,.28)';
          context.fillRect(x - .8, y - .8, 1.6, 1.6);
        }
      }

      context.strokeStyle = 'rgba(117,225,223,.15)';
      context.lineWidth = 1;
      for (let index = 0; index < 7; index += 1) {
        context.beginPath();
        const inset = 82 + index * 22;
        context.ellipse(width / 2, height / 2, Math.max(12, width / 2 - inset), Math.max(12, height / 2 - inset), Math.PI / 4, 0, Math.PI * 2);
        context.stroke();
      }

      if (!reducedMotion) fieldFrame = requestAnimationFrame(drawField);
    };
    resizeField();
    drawField();
    window.addEventListener('resize', resizeField, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(fieldFrame);
      else if (!reducedMotion) fieldFrame = requestAnimationFrame(drawField);
    });
  }

  const phaseCanvas = document.getElementById('phase-canvas');
  const phaseControl = document.getElementById('phase-control');
  const phaseOutput = document.getElementById('phase-output');
  if (phaseCanvas && phaseControl && phaseOutput) {
    const context = phaseCanvas.getContext('2d');
    let phaseSize = { width: 1, height: 1 };
    const resizePhase = () => {
      phaseSize = fitCanvas(phaseCanvas, context);
      drawPhase();
    };
    const drawPhase = () => {
      const { width, height } = phaseSize;
      const value = Number(phaseControl.value) / 100;
      const phase = value * Math.PI;
      context.clearRect(0, 0, width, height);

      const image = context.createImageData(Math.max(1, Math.floor(width)), Math.max(1, Math.floor(height)));
      const scale = Math.PI * 7 / Math.max(width, height);
      for (let y = 0; y < image.height; y += 1) {
        for (let x = 0; x < image.width; x += 1) {
          const fieldX = Math.sin((x - width / 2) * scale + phase);
          const fieldY = Math.sin((y - height / 2) * scale);
          const energy = Math.min(1, Math.abs(fieldX * fieldX - fieldY * fieldY));
          const index = (y * image.width + x) * 4;
          image.data[index] = Math.round(2 + energy * 30);
          image.data[index + 1] = Math.round(18 + energy * 174);
          image.data[index + 2] = Math.round(28 + energy * 174);
          image.data[index + 3] = 255;
        }
      }
      context.putImageData(image, 0, 0);

      const cell = Math.max(34, width / 9);
      const shift = (value * cell) / 2;
      for (let row = -1; row < height / cell + 2; row += 1) {
        for (let column = -1; column < width / cell + 2; column += 1) {
          if ((row + column) % 2 !== 0) continue;
          const x = column * cell - shift;
          const y = row * cell;
          context.fillStyle = 'rgba(246,248,247,.9)';
          context.beginPath();
          context.arc(x, y, 2.2, 0, Math.PI * 2);
          context.fill();
        }
      }
    };
    const updatePhase = () => {
      const value = Number(phaseControl.value) / 100;
      phaseOutput.value = `${value.toFixed(2)}π`;
      drawPhase();
    };
    phaseControl.addEventListener('input', updatePhase);
    window.addEventListener('resize', resizePhase, { passive: true });
    resizePhase();
    updatePhase();
  }
})();
