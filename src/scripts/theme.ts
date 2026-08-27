const KEY = 'theme';

function apply(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#1c1712' : '#f9f4eb');
  }
}

const btn = document.querySelector('[data-theme-toggle]');
btn?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem(KEY, next);
  } catch (e) {}
  apply(next);
});

const media = window.matchMedia('(prefers-color-scheme: dark)');
media.addEventListener('change', (e) => {
  try {
    if (!localStorage.getItem(KEY)) apply(e.matches ? 'dark' : 'light');
  } catch (err) {}
});