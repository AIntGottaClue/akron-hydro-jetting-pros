// Version the stylesheet so new navigation styles replace cached previews.
const siteStyles = document.querySelector('link[rel="stylesheet"]');
if (siteStyles) siteStyles.href = siteStyles.href.split('?')[0] + '?nav=20260927-4';
/* Replace these launch settings before publishing. */
window.SITE_CONFIG = {
  phoneDisplay: '(877) 761-0283',
  phoneHref: '+18777610283',
  formEndpoint: ''
};
document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = SITE_CONFIG.phoneDisplay; el.href = 'tel:' + SITE_CONFIG.phoneHref; el.setAttribute('aria-label', 'Call Topeka Hydro Jetting Pros at ' + SITE_CONFIG.phoneDisplay); });
const menu = document.querySelector('[data-menu-button]');
// Keep the existing links and branding; reuse the Fix & Flip three-line toggle and submenu.
if (menu) { menu.setAttribute('aria-label', 'Toggle menu'); menu.innerHTML = '<span></span><span></span><span></span>'; }
const serviceLinks = [['Severe Grease and Sludge','severe-grease-and-sludge'],['Tree Root Intrusions','tree-root-intrusions'],['Recurring Clogs and Slow Drains','recurring-clogs-and-slow-drains'],['Mineral and Scale Deposits','mineral-and-scale-deposits'],['Preventative Maintenance','preventative-maintenance']];
const menuNav = document.querySelector('[data-nav]');
if (menuNav) {
 const area = document.createElement('div'); area.className = 'navlinks__dropdown';
 const trigger = document.createElement('button'); trigger.type = 'button'; trigger.className = 'navlinks__dropdown-trigger'; trigger.setAttribute('aria-expanded','false'); trigger.setAttribute('aria-controls','services-menu'); trigger.innerHTML = 'Services <span aria-hidden="true">⌄</span>';
 const panel = document.createElement('div'); panel.className = 'navlinks__dropdown-menu'; panel.id = 'services-menu';
 const siteBase = new URL('../', document.querySelector('script[src*="/assets/site.js"]').src).pathname;
 serviceLinks.forEach(([name,slug]) => { const a = document.createElement('a'); a.href = siteBase + slug + '/'; a.textContent = name; panel.append(a); });
 area.append(trigger,panel);
 const servicesAnchor = menuNav.querySelector('a[href$="#services"]');
 if (servicesAnchor) { menuNav.insertBefore(area, servicesAnchor); servicesAnchor.remove(); } else { menuNav.insertBefore(area, menuNav.lastElementChild); }
}

const neighborhoodLinks = [['Potwin','potwin'],['College Hill','college-hill'],['Highland Park','highland-park'],['Westboro','westboro'],['Oakland','oakland'],['Hi-Crest','hi-crest']];
if (menuNav) {
 const nbArea = document.createElement('div'); nbArea.className = 'navlinks__dropdown';
 const nbTrigger = document.createElement('button'); nbTrigger.type = 'button'; nbTrigger.className = 'navlinks__dropdown-trigger'; nbTrigger.setAttribute('aria-expanded','false'); nbTrigger.setAttribute('aria-controls','neighborhoods-menu'); nbTrigger.innerHTML = 'Neighborhoods <span aria-hidden="true">⌄</span>';
 const nbPanel = document.createElement('div'); nbPanel.className = 'navlinks__dropdown-menu'; nbPanel.id = 'neighborhoods-menu';
 neighborhoodLinks.forEach(([name,slug]) => { const a = document.createElement('a'); a.href = siteBase + slug + '/'; a.textContent = name; nbPanel.append(a); });
 nbArea.append(nbTrigger, nbPanel);
 const servicesDropdown = menuNav.querySelector('.navlinks__dropdown');
 if (servicesDropdown) { servicesDropdown.after(nbArea); } else { menuNav.insertBefore(nbArea, menuNav.lastElementChild); }
}

const nav = document.querySelector('[data-nav]');
const dropdowns = [...document.querySelectorAll('.navlinks__dropdown')];
function setDropdown(dd, open) { dd.classList.toggle('open', open); dd.querySelector('button')?.setAttribute('aria-expanded', String(open)); }
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); if (!open) dropdowns.forEach(dd => setDropdown(dd, false)); });
dropdowns.forEach(dd => { dd.querySelector('button')?.addEventListener('click', () => { const open = !dd.classList.contains('open'); dropdowns.forEach(other => setDropdown(other, other === dd ? open : false)); }); });
document.addEventListener('click', e => { dropdowns.forEach(dd => { if (!dd.contains(e.target)) setDropdown(dd, false); }); });
nav?.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); } });
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
