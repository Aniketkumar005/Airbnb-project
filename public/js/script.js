
(() => { 

'use strict' 

const forms = document.querySelectorAll('.needs-validation') 

Array.from(forms).forEach(form => { 
form.addEventListener('submit', event => { 
if (!form.checkValidity()) { 
event.preventDefault() 
event.stopPropagation() 
}
form.classList.add('was-validated')
  }, false) 
  }) 
  })()



  // Get the theme toggle button and body element
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Check if the theme preference is saved in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-bs-theme', savedTheme); // Apply saved theme
  }

  // Toggle theme when the button is clicked
  themeToggle.addEventListener('click', () => {
    let currentTheme = body.getAttribute('data-bs-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Toggle between dark and light themes

    body.setAttribute('data-bs-theme', newTheme); // Apply the new theme

    // Save the new theme in localStorage to persist across page reloads
    localStorage.setItem('theme', newTheme);

    // Change button icon/text
    if (newTheme === 'dark') {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode'; // Update icon for light mode
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode'; // Update icon for dark mode
    }
  });





