import { translations } from '../i18n';

const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const nav = document.getElementById(btn?.getAttribute('aria-controls') ?? 'menu');

function setLabel(open: boolean) {
  if (!btn) return;
  const lang = document.documentElement.getAttribute('lang') === 'es' ? 'es' : 'en';
  const text = translations[lang][open ? 'menu.close' : 'menu.open'];
  btn.setAttribute('aria-label', text);
  btn.title = text;
}

function setOpen(open: boolean) {
  if (!btn || !nav) return;
  btn.classList.toggle('is-open', open);
  nav.classList.toggle('is-open', open);
  btn.setAttribute('aria-expanded', String(open));
  setLabel(open);
}

btn?.addEventListener('click', () => {
  setOpen(!nav?.classList.contains('is-open'));
});

nav?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => setOpen(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setOpen(false);
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 641px)').matches) setOpen(false);
});

setLabel(false);