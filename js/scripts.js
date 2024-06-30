document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check for saved dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Set initial mode
  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkModeNow = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeNow);
    darkModeToggle.innerHTML = isDarkModeNow 
      ? '<i class="fa fa-sun-o" aria-hidden="true"></i>'
      : '<i class="fa fa-moon-o" aria-hidden="true"></i>';
  });
});