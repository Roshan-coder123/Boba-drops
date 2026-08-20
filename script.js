const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('span');
const themeLabel = themeToggle.querySelector('.theme-toggle-label');

const savedTheme = localStorage.getItem('boba-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

function updateButton() {
  const isDark = document.body.classList.contains('dark-mode');

  if (isDark) {
    themeIcon.textContent = '☀';
    themeLabel.textContent = 'Light mode';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    themeIcon.textContent = '☾';
    themeLabel.textContent = 'Dark mode';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }

  themeToggle.setAttribute('aria-pressed', isDark);
}

updateButton();

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  const nowDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('boba-theme', nowDark ? 'dark' : 'light');
  updateButton();
});
