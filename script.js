// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Highlight active navigation link
function setActiveLink(activeId) {
  const links = document.querySelectorAll('.topnav a');
  links.forEach(link => link.classList.remove('active'));
  document.getElementById(activeId).classList.add('active');
}

// Event listeners for navigation links
document.getElementById('home-button').addEventListener('click', () => {
  scrollToSection('home-section');
  setActiveLink('home-button');
});

document.getElementById('education-link').addEventListener('click', () => {
  scrollToSection('education-section');
  setActiveLink('education-link');
});

document.getElementById('skills-link').addEventListener('click', () => {
  scrollToSection('skills-section');
  setActiveLink('skills-link');
});

document.getElementById('about-link').addEventListener('click', () => { // Added About Tab
  scrollToSection('about-section');
  setActiveLink('about-link');
});

document.getElementById('certificate-link').addEventListener('click', () => {
  scrollToSection('certificate-section');
  setActiveLink('certificate-link');
});

document.getElementById('contact-link').addEventListener('click', () => {
  scrollToSection('contact-section');
  setActiveLink('contact-link');
});
