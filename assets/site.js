/* Replace these launch settings before publishing. */
window.SITE_CONFIG = {
  phoneDisplay: '(877) 761-0283',
  phoneHref: '+18777610283',
  formEndpoint: ''
};
document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = SITE_CONFIG.phoneDisplay; el.href = 'tel:' + SITE_CONFIG.phoneHref; el.setAttribute('aria-label', 'Call Topeka Hydro Jetting Pros at ' + SITE_CONFIG.phoneDisplay); });
const menu = document.querySelector('[data-menu-button]');
menu?.addEventListener('click', () => { const nav = document.querySelector('[data-nav]'); const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('[data-lead-form]').forEach(form => form.addEventListener('submit', async e => {
  e.preventDefault();
  const status = form.querySelector('[role="status"]');
  if (form.elements.website.value) return;
  if (!SITE_CONFIG.formEndpoint) { status.textContent = 'The online form is not active yet. Please call once the listed number has been updated.'; return; }
  const button = form.querySelector('button[type="submit"]'); button.disabled = true;
  try {
    const response = await fetch(SITE_CONFIG.formEndpoint, {method:'POST', body: new FormData(form), headers:{Accept:'application/json'}});
    if (!response.ok) throw new Error('Form submission failed');
    status.textContent = 'Your request was sent.'; form.reset();
  } catch { status.textContent = 'The request could not be sent. Please call instead.'; }
  finally { button.disabled = false; }
}));
