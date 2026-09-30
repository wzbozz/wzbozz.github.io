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

  const translations = {
    en: {
      documentTitle: 'IdentiQ — Wave-defined ion trapping',
      metaDescription: 'IdentiQ is developing a wave-defined planar ion-trap architecture using coherent surface acoustic waves.',
      skipLink: 'Skip to content', primaryNav: 'Primary navigation', languageLabel: 'Language', menuLabel: 'Menu',
      navArchitecture: 'Architecture', navControl: 'Control', navAdvantages: 'Advantages', navConnect: 'Connect',
      heroEyebrow: 'Wave-defined ion trapping', heroTitle: 'Shape the field.<br><em>Move the trap.</em>',
      heroLede: 'IdentiQ is developing a planar ion-trap architecture that uses coherent surface-acoustic-wave electric fields to define reconfigurable radial RF-null arrays.',
      exploreArchitecture: 'Explore the architecture', researchStage: 'Research-stage platform',
      fieldAria: 'Normalized XY pseudopotential map from two orthogonal standing surface acoustic waves. The red ion projection is placed at the central RF null at height z equals h.',
      fieldTitle: 'PSEUDOPOTENTIAL / XY PLANE', idealizedModel: 'IDEALIZED MODEL', rfNulls: 'RF NULLS',
      brandAria: 'IdentiQ brand', brandStatement: 'A wave-defined approach to scalable trapped-ion hardware.',
      thesisIndex: '01 / THESIS', thesisKicker: 'A different control surface',
      thesisTitle: 'Instead of defining every RF feature in metal, define a lattice in the <em>acoustic field.</em>',
      thesisNote: 'Two orthogonal standing surface acoustic waves can produce a checkerboard of radial RF nulls above a piezoelectric chip. Spatial phase shifts translate the pattern globally, while dedicated DC electrodes provide axial confinement and compensation.',
      architectureIndex: '02 / ARCHITECTURE', architectureKicker: 'Four coherent directions.<br>One wave-defined plane.', architectureTitle: 'How the field<br>becomes a trap.',
      coherentRf: 'COHERENT RF', rfNullArray: 'RF NULL ARRAY', dcAxialControl: 'DC AXIAL CONTROL',
      stepLaunchTitle: 'Launch', stepLaunchBody: 'Opposing IDTs—or an IDT and reflector—establish coherent standing SAWs along two in-plane axes.',
      stepIntersectTitle: 'Intersect', stepIntersectBody: 'The evanescent electric fields overlap above the surface, creating an alternating checkerboard of RF-null lines.',
      stepCompleteTitle: 'Complete', stepCompleteBody: 'Separate static electrodes close the third dimension and compensate stray fields. The SAW field alone is not a complete 3D trap.',
      controlIndex: '03 / CONTROL', controlKicker: 'Program the field, not the metal', controlTitle: 'Control both axes.',
      controlIntro: 'Spatial phases translate the two-dimensional pattern. Frequencies set wavelength and IDT geometry; exact stationary RF nulls require frequency lock and a common temporal RF phase.',
      latticeSpacing: 'LATTICE SPACING', globalTranslation: 'GLOBAL TRANSLATION', idtGeometry: 'SINGLE-FINGER IDT', fieldExplorer: '2D FIELD CONTROL',
      phaseCanvasAria: 'Interactive visualization of two-axis phase and frequency control',
      phaseXLabel: 'Spatial phase φ<sub>x</sub>', phaseYLabel: 'Spatial phase φ<sub>y</sub>',
      frequencyXLabel: 'Frequency f<sub>x</sub>', frequencyYLabel: 'Frequency f<sub>y</sub>', matchFrequencies: 'MATCH f<sub>y</sub> TO f<sub>x</sub>',
      coherenceLocked: 'Equal frequencies and a common temporal phase preserve the stationary RF-null lattice.',
      advantagesIndex: '04 / ADVANTAGES', advantagesTitle: 'Why define the trap<br><em>with waves?</em>',
      advantagesIntro: 'The architecture moves part of the spatial patterning task from dense local RF metal to a coherent acoustic field. These are design opportunities to validate—not measured performance claims.',
      advantage1Title: 'Field-defined periodicity', advantage1Body: 'A coherent two-axis SAW field can create a regular checkerboard of radial RF-null lines without assigning a separate RF electrode feature to every lattice site.',
      advantage2Title: 'Global electronic translation', advantage2Body: 'Independent spatial phases translate the complete null pattern in two dimensions while preserving pair separations at fixed wavelength.',
      advantage3Title: 'Wavelength-set geometry', advantage3Body: 'Frequency sets the acoustic wavelength and nominal site spacing, creating a direct design link between the RF network and lattice geometry.',
      advantage4Title: 'Planar integration path', advantage4Body: 'The wave-defined radial pattern can be co-designed with dedicated DC confinement, optical access, compensation and readout on a planar platform.',
      advantagesCaveat: 'Practical benefit depends on crystal anisotropy, acoustic loss, RF-to-SAW transfer, thermal loading, phase coherence and a compatible three-dimensional DC geometry.',
      proofIndex: '05 / PROOF PATH', proofKicker: 'The honest next questions', proofTitle: 'From elegant field<br>to working hardware.',
      proof1Title: 'Close 3D confinement', proof1Body: 'Co-design finite SAW geometry with DC electrodes and evaluate full driven escape paths.',
      proof2Title: 'Calibrate the chain', proof2Body: 'Measure RF input → SAW amplitude → vacuum potential at the ion plane.',
      proof3Title: 'Control micromotion', proof3Body: 'Validate multichannel phase stability, null placement, and compensation under realistic errors.',
      proof4Title: 'Measure the noise', proof4Body: 'Characterize heating, thermal load, acoustic loss, and surface-related noise in UHV.',
      connectIndex: '06 / CONNECT', contactKicker: 'Physics is a team sport.', contactTitle: 'Let’s build the<br>next trap.',
      startConversation: 'Start a conversation', followGithub: 'Follow the work on GitHub',
      footerCompany: 'IDENTIQ QUANTUM TECHNOLOGIES', footerTagline: 'WAVE-DEFINED ION TRAPPING', backToTop: 'BACK TO TOP ↑'
    },
    zh: {
      documentTitle: 'IdentiQ — 波场定义的离子阱',
      metaDescription: 'IdentiQ 正在研发利用相干表面声波定义射频零点阵列的平面离子阱架构。',
      skipLink: '跳到主要内容', primaryNav: '主导航', languageLabel: '语言', menuLabel: '菜单',
      navArchitecture: '架构', navControl: '控制', navAdvantages: '技术优势', navConnect: '联系',
      heroEyebrow: '波场定义离子阱', heroTitle: '塑造电场。<br><em>移动阱位。</em>',
      heroLede: 'IdentiQ 正在研发一种平面离子阱架构，通过相干表面声波电场定义可重构的径向射频零点阵列。',
      exploreArchitecture: '了解技术架构', researchStage: '研发阶段平台',
      fieldAria: '两组正交驻波表面声波产生的 XY 平面归一化赝势图，红色离子投影位于高度 z 等于 h 的中心射频零点。',
      fieldTitle: '赝势 / XY 平面', idealizedModel: '理想化模型', rfNulls: '射频零点',
      brandAria: 'IdentiQ 品牌', brandStatement: '一种面向可扩展离子阱硬件的波场定义方案。',
      thesisIndex: '01 / 技术主张', thesisKicker: '不同的场控界面',
      thesisTitle: '不再用金属定义每一个射频结构，而是在<em>声学电场</em>中定义阵列。',
      thesisNote: '两组正交驻波表面声波可在压电芯片上方产生棋盘式径向射频零点。空间相位变化可整体平移阵列，独立直流电极则提供轴向约束和补偿。',
      architectureIndex: '02 / 技术架构', architectureKicker: '四个相干传播方向。<br>一个波场定义平面。', architectureTitle: '电场如何<br>形成阱。',
      coherentRf: '相干射频', rfNullArray: '射频零点阵列', dcAxialControl: '直流轴向控制',
      stepLaunchTitle: '激发', stepLaunchBody: '对向 IDT，或 IDT 与反射器，在两个平面方向上建立相干驻波表面声波。',
      stepIntersectTitle: '交叠', stepIntersectBody: '真空中的倐逝电场相互叠加，形成交替的棋盘式射频零点线。',
      stepCompleteTitle: '闭合', stepCompleteBody: '独立静电电极补齐第三维约束并补偿杂散电场。SAW 电场单独不构成完整的三维阱。',
      controlIndex: '03 / 场控', controlKicker: '编程电场，而非金属图形', controlTitle: '独立控制两个方向。',
      controlIntro: '空间相位控制二维阵列的平移，频率决定波长和 IDT 几何。精确的静止射频零点需要两轴频率锁定且共享时间射频相位。',
      latticeSpacing: '晶格间距', globalTranslation: '全局平移', idtGeometry: '单指 IDT', fieldExplorer: '二维场控制',
      phaseCanvasAria: '可交互的两轴相位与频率控制示意图',
      phaseXLabel: '空间相位 φ<sub>x</sub>', phaseYLabel: '空间相位 φ<sub>y</sub>',
      frequencyXLabel: '频率 f<sub>x</sub>', frequencyYLabel: '频率 f<sub>y</sub>', matchFrequencies: '使 f<sub>y</sub> 与 f<sub>x</sub> 相同',
      coherenceLocked: '频率相同且时间相位一致时，可保持静止的射频零点阵列。',
      advantagesIndex: '04 / 技术优势', advantagesTitle: '为什么用<em>波场</em><br>定义离子阱？',
      advantagesIntro: '该架构将部分空间图形化任务从密集的局部射频金属转移到相干声学场中。以下是待验证的设计机会，并非已测得的性能结论。',
      advantage1Title: '电场定义的周期性', advantage1Body: '相干二轴 SAW 电场可形成规则的棋盘式径向射频零点线，无需为每个阵列位点单独分配射频电极结构。',
      advantage2Title: '全局电子学平移', advantage2Body: '独立调节两轴空间相位，可在二维平面内整体移动零点阵列；在波长不变时，粒子对间距保持不变。',
      advantage3Title: '波长设定的几何', advantage3Body: '频率决定声波波长和名义位点间距，在射频网络与阵列几何之间建立直接的设计关系。',
      advantage4Title: '平面集成路径', advantage4Body: '波场定义的径向结构可与独立直流约束、光学通道、补偿与读出在平面平台上协同设计。',
      advantagesCaveat: '实际优势取决于晶体各向异性、声学损耗、射频到 SAW 的转换、热负载、相位相干性以及兼容的三维直流电极几何。',
      proofIndex: '05 / 验证路径', proofKicker: '需要诚实面对的问题', proofTitle: '从优雅电场<br>到可用硬件。',
      proof1Title: '闭合三维约束', proof1Body: '联合设计有限尺寸 SAW 几何与直流电极，并评估完整驱动逃逸路径。',
      proof2Title: '标定转换链路', proof2Body: '测量射频输入 → SAW 振幅 → 离子平面真空电势的完整链路。',
      proof3Title: '控制微运动', proof3Body: '在现实误差下验证多通道相位稳定性、零点位置与补偿能力。',
      proof4Title: '测量噪声', proof4Body: '在超高真空中表征加热、热负载、声学损耗与表面相关噪声。',
      connectIndex: '06 / 联系', contactKicker: '物理从来不是单打独斗。', contactTitle: '一起构建<br>下一代离子阱。',
      startConversation: '与我们交流', followGithub: '在 GitHub 关注进展',
      footerCompany: '全同量芯', footerTagline: '波场定义离子阱', backToTop: '返回顶部 ↑'
    }
  };

  let currentLanguage = localStorage.getItem('identiq-language') || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');
  const applyLanguage = (language) => {
    currentLanguage = language === 'zh' ? 'zh' : 'en';
    const copy = translations[currentLanguage];
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    document.title = copy.documentTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = copy.metaDescription;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = copy[element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const value = copy[element.dataset.i18nAriaLabel];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
    });
    localStorage.setItem('identiq-language', currentLanguage);
    window.dispatchEvent(new CustomEvent('identiq-language-change', { detail: { language: currentLanguage } }));
  };
  document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));

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

  const fillPotentialBuffer = (context, size, phaseAt) => {
    const image = context.createImageData(size, size);
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const { phaseX, phaseY } = phaseAt(x, y, size);
        const normalizedPotential = .5 * (1 + Math.cos(phaseX) * Math.cos(phaseY));
        const shade = Math.pow(normalizedPotential, .62);
        const index = (y * size + x) * 4;
        image.data[index] = Math.round(1 + shade * 28);
        image.data[index + 1] = Math.round(18 + shade * 148);
        image.data[index + 2] = Math.round(29 + shade * 154);
        image.data[index + 3] = 255;
      }
    }
    context.putImageData(image, 0, 0);
  };

  const fieldCanvas = document.getElementById('field-canvas');
  if (fieldCanvas) {
    const context = fieldCanvas.getContext('2d');
    const buffer = document.createElement('canvas');
    const bufferContext = buffer.getContext('2d');
    const bufferSize = 360;
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
      const cycles = 5;
      fillPotentialBuffer(bufferContext, bufferSize, (x, y, size) => ({
        phaseX: (x / size - .5) * Math.PI * 2 * cycles,
        phaseY: (y / size - .5) * Math.PI * 2 * cycles + Math.PI
      }));
      context.clearRect(0, 0, width, height);
      context.imageSmoothingEnabled = true;
      context.drawImage(buffer, 0, 0, width, height);

      const wavelength = width / cycles;
      const pitch = wavelength / 2;
      const fingerWidth = wavelength / 4;
      const halfPeriod = pitch;
      const centerX = width / 2;
      const centerY = height / 2;
      context.lineWidth = 1.2;
      for (let m = -cycles - 1; m <= cycles + 1; m += 1) {
        for (let n = -cycles - 1; n <= cycles + 1; n += 1) {
          if (Math.abs((m + n) % 2) !== 0) continue;
          const x = centerX + m * halfPeriod;
          const y = centerY + n * halfPeriod;
          if (x < 8 || x > width - 8 || y < 8 || y > height - 8) continue;
          context.fillStyle = '#011927';
          context.strokeStyle = 'rgba(238,255,255,.86)';
          context.beginPath();
          context.arc(x, y, Math.max(2.2, width * .0055), 0, Math.PI * 2);
          context.fill();
          context.stroke();
        }
      }

      const firstNull = { x: centerX, y: centerY };
      const secondNull = { x: centerX + halfPeriod, y: centerY + halfPeriod };
      context.strokeStyle = 'rgba(255,255,255,.7)';
      context.fillStyle = 'rgba(255,255,255,.82)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(firstNull.x, firstNull.y);
      context.lineTo(secondNull.x, secondNull.y);
      context.stroke();
      context.font = `${Math.max(9, width * .017)}px SFMono-Regular, Consolas, monospace`;
      context.textAlign = 'left';
      context.fillText('λ/√2', (firstNull.x + secondNull.x) / 2 + 5, (firstNull.y + secondNull.y) / 2 + 3);

      const aperture = width * .27;
      const firstCenter = width * .1;
      const fingerCount = 3;
      for (let index = 0; index < fingerCount; index += 1) {
        const offset = firstCenter + index * pitch;
        context.fillStyle = index % 2 === 0 ? 'rgba(117,225,223,.9)' : 'rgba(238,255,255,.72)';
        context.fillRect(centerX - aperture / 2, offset - fingerWidth / 2, aperture, fingerWidth);
        context.fillRect(centerX - aperture / 2, height - offset - fingerWidth / 2, aperture, fingerWidth);
        context.fillRect(offset - fingerWidth / 2, centerY - aperture / 2, fingerWidth, aperture);
        context.fillRect(width - offset - fingerWidth / 2, centerY - aperture / 2, fingerWidth, aperture);
      }

      const bracketX = centerX + aperture / 2 + 10;
      const bracketY1 = firstCenter;
      const bracketY2 = firstCenter + pitch;
      context.strokeStyle = 'rgba(255,255,255,.78)';
      context.fillStyle = 'rgba(255,255,255,.86)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(bracketX, bracketY1);
      context.lineTo(bracketX, bracketY2);
      context.moveTo(bracketX - 4, bracketY1);
      context.lineTo(bracketX + 4, bracketY1);
      context.moveTo(bracketX - 4, bracketY2);
      context.lineTo(bracketX + 4, bracketY2);
      context.stroke();
      context.font = `${Math.max(8, width * .014)}px SFMono-Regular, Consolas, monospace`;
      context.fillText('p=λ/2', bracketX + 6, (bracketY1 + bracketY2) / 2 + 3);

      const innerEdge = firstCenter + (fingerCount - 1) * pitch + fingerWidth / 2;
      context.strokeStyle = 'rgba(117,225,223,.8)';
      context.lineWidth = 1.4;
      drawArrow(centerX, innerEdge + 7, centerX, innerEdge + 25);
      drawArrow(centerX, height - innerEdge - 7, centerX, height - innerEdge - 25);
      drawArrow(innerEdge + 7, centerY, innerEdge + 25, centerY);
      drawArrow(width - innerEdge - 7, centerY, width - innerEdge - 25, centerY);

      const ionRadius = Math.max(6, width * .013);
      const ionGlow = context.createRadialGradient(centerX, centerY, ionRadius * .2, centerX, centerY, ionRadius * 3.2);
      ionGlow.addColorStop(0, 'rgba(201,52,43,.52)');
      ionGlow.addColorStop(1, 'rgba(201,52,43,0)');
      context.fillStyle = ionGlow;
      context.beginPath();
      context.arc(centerX, centerY, ionRadius * 3.2, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = '#c9342b';
      context.strokeStyle = '#ffffff';
      context.lineWidth = 2;
      context.beginPath();
      context.arc(centerX, centerY, ionRadius, 0, Math.PI * 2);
      context.fill();
      context.stroke();

      const labelX = centerX + ionRadius + 14;
      const labelY = centerY - ionRadius - 12;
      context.strokeStyle = 'rgba(255,255,255,.72)';
      context.fillStyle = 'rgba(255,255,255,.9)';
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(centerX + ionRadius * .7, centerY - ionRadius * .7);
      context.lineTo(labelX - 5, labelY + 4);
      context.stroke();
      context.font = `${Math.max(8, width * .014)}px SFMono-Regular, Consolas, monospace`;
      context.textAlign = 'left';
      context.fillText(currentLanguage === 'zh' ? '离子 @ 射频零点 · z=h' : 'ION @ RF NULL · z=h', labelX, labelY + 7);
    };

    const resizeField = () => {
      fieldSize = fitCanvas(fieldCanvas, context);
      drawField();
    };
    resizeField();
    window.addEventListener('resize', resizeField, { passive: true });
    window.addEventListener('identiq-language-change', drawField);
  }

  const phaseCanvas = document.getElementById('phase-canvas');
  const phaseXControl = document.getElementById('phase-x');
  const phaseYControl = document.getElementById('phase-y');
  const frequencyXControl = document.getElementById('frequency-x');
  const frequencyYControl = document.getElementById('frequency-y');
  if (phaseCanvas && phaseXControl && phaseYControl && frequencyXControl && frequencyYControl) {
    const context = phaseCanvas.getContext('2d');
    const buffer = document.createElement('canvas');
    const bufferContext = buffer.getContext('2d');
    const bufferSize = 280;
    const viewMicrometers = 1560;
    const velocityScale = 3900;
    buffer.width = bufferSize;
    buffer.height = bufferSize;
    let phaseSize = { width: 1, height: 1 };

    const phaseXOutput = document.getElementById('phase-x-output');
    const phaseYOutput = document.getElementById('phase-y-output');
    const frequencyXOutput = document.getElementById('frequency-x-output');
    const frequencyYOutput = document.getElementById('frequency-y-output');
    const lambdaXOutput = document.getElementById('lambda-x');
    const lambdaYOutput = document.getElementById('lambda-y');
    const pitchXOutput = document.getElementById('pitch-x');
    const pitchYOutput = document.getElementById('pitch-y');
    const coherenceStatus = document.getElementById('coherence-status');
    const coherenceNote = document.getElementById('coherence-note');
    const matchButton = document.getElementById('frequency-match');

    const values = () => {
      const phaseXPi = Number(phaseXControl.value) / 100;
      const phaseYPi = Number(phaseYControl.value) / 100;
      const frequencyX = Number(frequencyXControl.value);
      const frequencyY = Number(frequencyYControl.value);
      return {
        phaseXPi,
        phaseYPi,
        phaseX: phaseXPi * Math.PI,
        phaseY: phaseYPi * Math.PI,
        frequencyX,
        frequencyY,
        lambdaX: velocityScale / frequencyX,
        lambdaY: velocityScale / frequencyY,
        locked: frequencyX === frequencyY
      };
    };

    const drawPhase = () => {
      const { width, height } = phaseSize;
      const state = values();
      fillPotentialBuffer(bufferContext, bufferSize, (x, y, size) => ({
        phaseX: (x / size - .5) * viewMicrometers / state.lambdaX * Math.PI * 2 + state.phaseX,
        phaseY: (y / size - .5) * viewMicrometers / state.lambdaY * Math.PI * 2 + state.phaseY
      }));
      context.clearRect(0, 0, width, height);
      context.imageSmoothingEnabled = true;
      context.drawImage(buffer, 0, 0, width, height);

      if (state.locked) {
        const halfPeriodX = state.lambdaX / 2 / viewMicrometers * width;
        const halfPeriodY = state.lambdaY / 2 / viewMicrometers * height;
        const countX = Math.ceil(width / Math.max(halfPeriodX, 1) / 2) + 2;
        const countY = Math.ceil(height / Math.max(halfPeriodY, 1) / 2) + 2;
        for (let m = -countX; m <= countX; m += 1) {
          for (let n = -countY; n <= countY; n += 1) {
            if (Math.abs((m + n) % 2) !== 1) continue;
            const x = width / 2 + (m - state.phaseXPi) * halfPeriodX;
            const y = height / 2 + (n - state.phaseYPi) * halfPeriodY;
            if (x < 4 || x > width - 4 || y < 4 || y > height - 4) continue;
            context.fillStyle = '#011927';
            context.strokeStyle = 'rgba(246,248,247,.9)';
            context.lineWidth = 1;
            context.beginPath();
            context.arc(x, y, Math.max(2.2, width * .005), 0, Math.PI * 2);
            context.fill();
            context.stroke();
          }
        }
      } else {
        context.fillStyle = 'rgba(1,25,39,.78)';
        context.fillRect(0, height - 40, width, 40);
        context.fillStyle = '#ff9a91';
        context.font = `${Math.max(10, width * .021)}px SFMono-Regular, Consolas, monospace`;
        context.textAlign = 'center';
        context.fillText(currentLanguage === 'zh' ? '频率未锁定 · 仅为瞬时几何快照' : 'FREQUENCY UNLOCKED · GEOMETRY SNAPSHOT ONLY', width / 2, height - 16);
      }
    };

    const updateControls = () => {
      const state = values();
      phaseXOutput.value = `${state.phaseXPi.toFixed(2)}π`;
      phaseYOutput.value = `${state.phaseYPi.toFixed(2)}π`;
      frequencyXOutput.value = `${state.frequencyX.toFixed(0)} MHz`;
      frequencyYOutput.value = `${state.frequencyY.toFixed(0)} MHz`;
      lambdaXOutput.value = `${state.lambdaX.toFixed(1)} µm`;
      lambdaYOutput.value = `${state.lambdaY.toFixed(1)} µm`;
      pitchXOutput.value = `${(state.lambdaX / 2).toFixed(1)} µm`;
      pitchYOutput.value = `${(state.lambdaY / 2).toFixed(1)} µm`;
      coherenceStatus.dataset.state = state.locked ? 'locked' : 'unlocked';
      coherenceNote.dataset.state = state.locked ? 'locked' : 'unlocked';
      if (state.locked) {
        coherenceStatus.value = currentLanguage === 'zh' ? '相干锁定' : 'COHERENT LOCK';
        coherenceNote.textContent = translations[currentLanguage].coherenceLocked;
      } else {
        coherenceStatus.value = currentLanguage === 'zh' ? '频率失配' : 'FREQUENCY MISMATCH';
        coherenceNote.textContent = currentLanguage === 'zh'
          ? 'fₓ ≠ fᵧ：长时间平均下交叉项消失，不存在静止的射频零点晶格；图中仅显示瞬时几何快照。'
          : 'fₓ ≠ fᵧ: the long-time cross term vanishes, so no stationary RF-null lattice remains; the map is an instantaneous geometry snapshot only.';
      }
      drawPhase();
    };

    const resizePhase = () => {
      phaseSize = fitCanvas(phaseCanvas, context);
      drawPhase();
    };
    [phaseXControl, phaseYControl, frequencyXControl, frequencyYControl].forEach((control) => control.addEventListener('input', updateControls));
    matchButton?.addEventListener('click', () => {
      frequencyYControl.value = frequencyXControl.value;
      updateControls();
    });
    window.addEventListener('resize', resizePhase, { passive: true });
    window.addEventListener('identiq-language-change', updateControls);
    resizePhase();
    updateControls();
  }

  applyLanguage(currentLanguage);
})();
