// Dark/Light modu toggle
const themeToggleButton = document.getElementById('theme-toggle');

// Kullanıcı tercihlerini local storagedan alma
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  themeToggleButton.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Tema değiştir
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Tema durumunu sakla
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
  themeToggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Scroll animasyon
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const triggerHeight = window.innerHeight / 1.2;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < triggerHeight) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Menü linklerine tıklandığında menüyü kapat
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});