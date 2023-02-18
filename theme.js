const themeLink = document.getElementById('theme-link');
const themeButton = document.getElementById('change-theme');

themeButton.addEventListener('click', () => {
  if (themeLink.getAttribute('href') === 'default.css') {
    themeLink.setAttribute('href', 'dark.css');
  } else {
    themeLink.setAttribute('href', 'default.css');
  }
});
