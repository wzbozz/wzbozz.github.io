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
    const buffer = document.createElement('canvas');
    const bufferContext = buffer.getContext('2d');
    const bufferSize = 320;
    buffer.width = bufferSize;
    buffer.height = bufferSize;
    let fieldSize = { width: 1, height: 1 };

    const drawArrow = (x1, y1, x2, y2) => {
      const angle = Math.atan2(y2 - y1, x2 - x1);
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineTo(x2 - Math.cos(angle - Math.PI / 6) * 7, y2 - Math.sin(angle - Math.PI / 6) * 7);
      context.moveTo(x2, y2);
      context.lineTo(x2 - Math.cos(angle + Math.PI / 6) * 7, y2 - Math.sin(angle + Math.PI / 6) * 7);
      context.stroke();
    };

    const drawField = () => {
      const { width, height } = fieldSize;
      context.clearRect(0, 0, width, height);

      const image = bufferContext.createImageData(bufferSize, bufferSize);
      const cycles = 4;
      for (let y = 0; y < bufferSize; y += 1) {
        for (let x = 0; x < bufferSize; x += 1) {
          const phaseX = (x / bufferSize - .5) * Math.PI * 2 * cycles;
          const phaseY = (y / bufferSize - .5) * Math.PI * 2 * cycles;
          const normalizedPotential = .5 * (1 + Math.cos(phaseX) * Math.cos(phaseY));
          const shade = Math.pow(normalizedPotential, .62);
          const index = (y * bufferSize + x) * 4;
          image.data[index] = Math.round(1 + shade * 28);
          image.data[index + 1] = Math.round(18 + shade * 148);
          image.data[index + 2] = Math.round(29 + shade * 154);
          image.data[index + 3] = 255;
        }
      }
      bufferContext.putImageData(image, 0, 0);
      context.imageSmoothingEnabled = true;
      context.drawImage(buffer, 0, 0, width, height);

      const halfPeriod = width / (cycles * 2);
      const centerX = width / 2;
      const centerY = height / 2;
      context.lineWidth = 1.2;
      for (let m = -cycles - 1; m <= cycles + 1; m += 1) {
        for (let n = -cycles - 1; n <= cycles + 1; n += 1) {
          if (Math.abs((m + n) % 2) !== 1) continue;
          const x = centerX + m * halfPeriod;
          const y = centerY + n * halfPeriod;
          if (x < 8 || x > width - 8 || y < 8 || y > height - 8) continue;
          context.fillStyle = '#011927';
          context.strokeStyle = 'rgba(238,255,255,.86)';
          context.beginPath();
          context.arc(x, y, Math.max(2.2, width * .006), 0, Math.PI * 2);
          context.fill();
          context.stroke();
        }
      }

      const firstNull = { x: centerX, y: centerY + halfPeriod };
      const secondNull = { x: centerX + halfPeriod, y: centerY };
      context.strokeStyle = 'rgba(255,255,255,.68)';
      context.fillStyle = 'rgba(255,255,255,.8)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(firstNull.x, firstNull.y);
      context.lineTo(secondNull.x, secondNull.y);
      context.stroke();
      context.font = `${Math.max(9, width * .018)}px SFMono-Regular, Consolas, monospace`;
      context.textAlign = 'left';
      context.fillText('λ/√2', (firstNull.x + secondNull.x) / 2 + 6, (firstNull.y + secondNull.y) / 2 + 3);

      const idtLength = width * .27;
      const idtDepth = Math.max(22, width * .045);
      const edge = Math.max(48, width * .095);
      const fingerCount = 7;
      context.strokeStyle = 'rgba(117,225,223,.92)';
      context.lineWidth = Math.max(1.2, width * .003);
      for (let index = 0; index < fingerCount; index += 1) {
        const offset = index * (idtDepth / (fingerCount - 1));
        context.beginPath();
        context.moveTo(centerX - idtLength / 2, edge + offset);
        context.lineTo(centerX + idtLength / 2, edge + offset);
        context.moveTo(centerX - idtLength / 2, height - edge - offset);
        context.lineTo(centerX + idtLength / 2, height - edge - offset);
        context.moveTo(edge + offset, centerY - idtLength / 2);
        context.lineTo(edge + offset, centerY + idtLength / 2);
        context.moveTo(width - edge - offset, centerY - idtLength / 2);
        context.lineTo(width - edge - offset, centerY + idtLength / 2);
        context.stroke();
      }

      context.strokeStyle = 'rgba(117,225,223,.72)';
      context.lineWidth = 1.4;
      drawArrow(centerX, edge + idtDepth + 8, centerX, edge + idtDepth + 30);
      drawArrow(centerX, height - edge - idtDepth - 8, centerX, height - edge - idtDepth - 30);
      drawArrow(edge + idtDepth + 8, centerY, edge + idtDepth + 30, centerY);
      drawArrow(width - edge - idtDepth - 8, centerY, width - edge - idtDepth - 30, centerY);
    };
    const resizeField = () => {
      fieldSize = fitCanvas(fieldCanvas, context);
      drawField();
    };
    resizeField();
    window.addEventListener('resize', resizeField, { passive: true });
  }

  const phaseCanvas = document.getElementById('phase-canvas');
  const phaseControl = document.getElementById('phase-control');
  const phaseOutput = document.getElementById('phase-output');
  if (phaseCanvas && phaseControl && phaseOutput) {
    const context = phaseCanvas.getContext('2d');
    const buffer = document.createElement('canvas');
    const bufferContext = buffer.getContext('2d');
    const bufferSize = 240;
    buffer.width = bufferSize;
    buffer.height = bufferSize;
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

      const image = bufferContext.createImageData(bufferSize, bufferSize);
      const scale = Math.PI * 7 / bufferSize;
      for (let y = 0; y < image.height; y += 1) {
        for (let x = 0; x < image.width; x += 1) {
          const phaseX = (x - bufferSize / 2) * scale + phase;
          const phaseY = (y - bufferSize / 2) * scale;
          const energy = .5 * (1 + Math.cos(phaseX) * Math.cos(phaseY));
          const shade = Math.pow(energy, .62);
          const index = (y * image.width + x) * 4;
          image.data[index] = Math.round(1 + shade * 28);
          image.data[index + 1] = Math.round(18 + shade * 148);
          image.data[index + 2] = Math.round(29 + shade * 154);
          image.data[index + 3] = 255;
        }
      }
      bufferContext.putImageData(image, 0, 0);
      context.imageSmoothingEnabled = true;
      context.drawImage(buffer, 0, 0, width, height);

      const halfPeriodX = width / 7;
      const halfPeriodY = height / 7;
      for (let m = -5; m <= 5; m += 1) {
        for (let n = -5; n <= 5; n += 1) {
          if (Math.abs((m + n) % 2) !== 1) continue;
          const x = width / 2 + (m - value) * halfPeriodX;
          const y = height / 2 + n * halfPeriodY;
          if (x < 4 || x > width - 4 || y < 4 || y > height - 4) continue;
          context.fillStyle = '#011927';
          context.strokeStyle = 'rgba(246,248,247,.9)';
          context.lineWidth = 1;
          context.beginPath();
          context.arc(x, y, 2.7, 0, Math.PI * 2);
          context.fill();
          context.stroke();
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
