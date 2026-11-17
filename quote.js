(() => {
  const drawer = document.querySelector('#quote-drawer');
  if (!drawer) return;

  const form = drawer.querySelector('form');
  const load = form.elements.namedItem('items');
  const email = drawer.querySelector('.quote-email');
  const mailto = email.getAttribute('href');
  const subject = 'Pickup quote request';
  const close = drawer.querySelector('.quote-close');
  const copy = drawer.querySelector('.quote-copy');
  const status = drawer.querySelector('.quote-status');
  const manual = drawer.querySelector('.quote-manual');
  const manualText = manual.querySelector('textarea');
  let opener;

  document.querySelectorAll('[data-quote]').forEach((button) => {
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', drawer.id);
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (drawer.open) return;
      opener = button;
      drawer.showModal();
      drawer.scrollTop = 0;
    });
  });

  close.addEventListener('click', () => drawer.close());
  drawer.addEventListener('close', () => opener?.focus({ preventScroll: true }));

  drawer.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;

    const controls = Array.from(drawer.querySelectorAll('button, input, textarea, a[href]'))
      .filter((control) => control.getClientRects().length);
    const first = controls[0];
    const last = controls.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  function requestDetails() {
    const fields = new FormData(form);
    const lines = [
      ['Pickup ZIP', fields.get('zip')],
      ['What needs to go', fields.get('items')],
      ['Preferred day', fields.get('day')],
      ['Access or stairs', fields.get('access')],
    ];

    return lines
      .map(([label, value]) => [label, value.trim()])
      .filter(([, value]) => value)
      .map(([label, value]) => label + ': ' + value)
      .join('\n');
  }

  function validate() {
    load.setCustomValidity(load.value.trim() ? '' : 'Describe what needs to go.');
    return form.reportValidity();
  }

  form.addEventListener('input', (event) => {
    if (event.target === load) load.setCustomValidity('');
    status.textContent = '';
    manual.hidden = true;
    email.href = mailto;
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    email.click();
  });

  email.addEventListener('click', (event) => {
    if (!validate()) {
      event.preventDefault();
      return;
    }

    const body = requestDetails().replace(/\n/g, '\r\n');
    email.href = mailto + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  copy.addEventListener('click', async () => {
    if (!validate()) return;

    const details = requestDetails();
    try {
      await navigator.clipboard.writeText(details);
      if (drawer.open && requestDetails() === details) {
        manual.hidden = true;
        status.textContent = 'Request details copied.';
      }
    } catch {
      if (!drawer.open || requestDetails() !== details) return;
      manualText.value = details;
      manual.hidden = false;
      manualText.focus();
      manualText.select();
      status.textContent = 'Copy the selected text into your email.';
    }
  });
})();
