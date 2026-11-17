(() => {
  const rail = document.querySelector('.rail');
  const panels = Array.from(rail.querySelectorAll('.panel'));
  const sectionButtons = Array.from(document.querySelectorAll('.panel-button'));
  const previous = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const count = document.querySelector('.pager-count');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let destination = null;
  let frame = 0;
  let lastWheelMove = -Infinity;

  function select(index) {
    if (index === activeIndex) return;

    if (panels[activeIndex].contains(document.activeElement)) {
      rail.focus({ preventScroll: true });
    }
    activeIndex = index;
    for (let i = 0; i < panels.length; i++) {
      const active = i === index;
      const panel = panels[i];
      panel.classList.toggle('active', active);
      panel.inert = !active;
      if (active) {
        panel.removeAttribute('aria-hidden');
        sectionButtons[i].setAttribute('aria-current', 'step');
      } else {
        panel.setAttribute('aria-hidden', 'true');
        sectionButtons[i].removeAttribute('aria-current');
      }
    }

    const atStart = index === 0;
    const atEnd = index === panels.length - 1;
    if ((atStart && document.activeElement === previous) || (atEnd && document.activeElement === next)) {
      sectionButtons[index].focus({ preventScroll: true });
    }
    previous.disabled = atStart;
    next.disabled = atEnd;
    count.textContent = `Section ${index + 1} of ${panels.length}`;
    document.dispatchEvent(new CustomEvent('panelchange', {
      detail: { index, panel: panels[index] }
    }));
  }

  function clamp(index) {
    return Math.min(panels.length - 1, Math.max(0, index));
  }

  function leftFor(index) {
    return index * rail.clientWidth;
  }

  function moveTo(index, behavior = reducedMotion.matches ? 'instant' : 'smooth') {
    const target = clamp(index);
    const left = leftFor(target);
    destination = Math.abs(rail.scrollLeft - left) < 1 ? null : target;
    select(target);
    rail.scrollTo({ left, behavior });
  }

  function followScroll() {
    frame = 0;
    if (!rail.clientWidth) return;
    if (destination !== null) {
      // A button can pass several panels on its way to the selected section.
      if (Math.abs(rail.scrollLeft - leftFor(destination)) < 1) destination = null;
      return;
    }
    select(clamp(Math.round(rail.scrollLeft / rail.clientWidth)));
  }

  for (const control of document.querySelectorAll('[data-goto]')) {
    control.addEventListener('click', event => {
      event.preventDefault();
      moveTo(Number(control.dataset.goto));
    });
  }
  previous.addEventListener('click', () => moveTo(activeIndex - 1));
  next.addEventListener('click', () => moveTo(activeIndex + 1));

  rail.addEventListener('scroll', () => {
    if (!frame) frame = requestAnimationFrame(followScroll);
  }, { passive: true });

  // Let a finger or trackpad take over a programmatic scroll.
  rail.addEventListener('touchstart', () => { destination = null; }, { passive: true });
  rail.addEventListener('wheel', event => {
    if (event.ctrlKey || event.metaKey) return;
    if (event.shiftKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
      destination = null;
      return;
    }

    const panel = panels[activeIndex];
    const down = event.deltaY > 0;
    const canScroll = down
      ? panel.scrollHeight - panel.clientHeight - panel.scrollTop > 2
      : panel.scrollTop > 2;
    if (canScroll || Math.abs(event.deltaY) < 12) return;

    const target = clamp(activeIndex + (down ? 1 : -1));
    if (target === activeIndex) return;
    event.preventDefault();
    const now = performance.now();
    if (destination !== null || now - lastWheelMove < 520) return;
    lastWheelMove = now;
    moveTo(target);
  }, { passive: false });

  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (document.querySelector('dialog[open]')) return;
    if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable]')) return;

    const destinations = {
      ArrowLeft: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      Home: 0,
      End: panels.length - 1
    };
    if (!Object.hasOwn(destinations, event.key)) return;
    event.preventDefault();
    moveTo(destinations[event.key]);
  });

  function followHash() {
    const index = panels.findIndex(panel => `#${panel.id}` === location.hash);
    if (index !== -1) moveTo(index, 'instant');
  }
  window.addEventListener('hashchange', followHash);
  window.addEventListener('pageshow', followHash);
  followHash();

  window.addEventListener('resize', () => moveTo(activeIndex, 'instant'));
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) moveTo(activeIndex, 'instant');
  });
})();
