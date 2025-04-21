// Theme toggle functionality
const lightBtn = document.getElementById('light-theme-btn');
const systemBtn = document.getElementById('system-theme-btn');
const darkBtn = document.getElementById('dark-theme-btn');

// Function to check system preference
function checkSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Function to set theme
function setTheme(theme) {
    let appliedTheme = theme;
    if (theme === 'system') {
        appliedTheme = checkSystemPreference();
    }
    document.documentElement.setAttribute('data-theme', appliedTheme);
    localStorage.setItem('theme', theme);

    // Update button states
    lightBtn.setAttribute('data-state', theme === 'light' ? 'active' : '');
    systemBtn.setAttribute('data-state', theme === 'system' ? 'active' : '');
    darkBtn.setAttribute('data-state', theme === 'dark' ? 'active' : '');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'system';
setTheme(savedTheme);

// Event listeners for theme buttons
lightBtn.addEventListener('click', () => setTheme('light'));
darkBtn.addEventListener('click', () => setTheme('dark'));
systemBtn.addEventListener('click', () => setTheme('system'));

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === 'system') {
        setTheme('system');
    }
});
// Show/hide button based on scroll position
window.onscroll = function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
// Smooth scroll to top when clicked
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });