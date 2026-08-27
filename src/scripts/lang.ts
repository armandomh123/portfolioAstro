import { translations, type Lang } from '../i18n';

const KEY = 'lang';
const META_DESCRIPTION = document.querySelector('meta[name="description"]');

function apply(lang: Lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key || dict[key] == null) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && dict[key]) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('[data-i18n-href]').forEach((el) => {
    const key = el.getAttribute('data-i18n-href');
    if (key && dict[key]) el.setAttribute('href', dict[key]);
  });

  document.querySelectorAll('[data-lang-part]').forEach((el) => {
    (el as HTMLElement).hidden = el.getAttribute('data-lang-part') !== lang;
  });

  if (dict['meta.title']) document.title = dict['meta.title'];
  if (META_DESCRIPTION && dict['meta.description']) {
    META_DESCRIPTION.setAttribute('content', dict['meta.description']);
  }

  const langBtn = document.querySelector('[data-lang-toggle]');
  if (langBtn) langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
}

const current = document.documentElement.getAttribute('lang') === 'es' ? 'es' : 'en';
apply(current);

document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => {
  const next: Lang = document.documentElement.getAttribute('lang') === 'es' ? 'en' : 'es';
  try {
    localStorage.setItem(KEY, next);
  } catch (e) {}
  apply(next);
});