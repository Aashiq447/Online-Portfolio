// Responsive behavior for the entire website
function adjustLayout() {
    // Responsive behavior for the navbar
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar-link');
  
    if (window.innerWidth <= 768) {
      navbar.style.flexDirection = 'column';
      navbarLinks.forEach(link => {
        link.style.margin = '10px 0';
      });
    } else {
      navbar.style.flexDirection = 'row';
      navbarLinks.forEach(link => {
        link.style.margin = '0 15px';
      });
    }
  
    // Responsive behavior for the about us section
    const aboutUs = document.querySelector('.about-us');
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
  
    if (window.innerWidth <= 768) {
      aboutUs.style.flexDirection = 'column-reverse';
      aboutText.style.marginBottom = '20px';
      aboutImage.style.width = '100%';
    } else {
      aboutUs.style.flexDirection = 'row';
      aboutText.style.marginBottom = '0';
      aboutImage.style.width = '50%';
    }
  
    // Responsive behavior for the projects section
    const projectCards = document.querySelectorAll('.project-card');
  
    if (window.innerWidth <= 768) {
      projectCards.forEach(card => {
        card.style.width = '100%';
      });
    } else {
      projectCards.forEach(card => {
        card.style.width = '30%';
      });
    }
  
    // Responsive behavior for the skills section
    const skillIcons = document.querySelectorAll('.skill-icon');
    const skillTitles = document.querySelectorAll('.skill-title');
    const skillDescriptions = document.querySelectorAll('.skill-description');
  
    if (window.innerWidth <= 768) {
      skillIcons.forEach(icon => {
        icon.style.fontSize = '36px';
      });
  
      skillTitles.forEach(title => {
        title.style.fontSize = '24px';
      });
  
      skillDescriptions.forEach(description => {
        description.style.fontSize = '16px';
      });
    } else {
      skillIcons.forEach(icon => {
        icon.style.fontSize = '48px';
      });
  
      skillTitles.forEach(title => {
        title.style.fontSize = '28px';
      });
  
      skillDescriptions.forEach(description => {
        description.style.fontSize = '18px';
      });
    }
  
    // Responsive behavior for the contact us section
    const contactForm = document.querySelector('.contact-form');
    const contactInputs = document.querySelectorAll('.contact-input');
    const contactMessage = document.querySelector('.contact-message');
    const contactButton = document.querySelector('.contact-button');
  
    if (window.innerWidth <= 768) {
      contactForm.style.padding = '20px';
      contactInputs.forEach(input => {
        input.style.marginBottom = '10px';
        input.style.padding = '8px';
        input.style.fontSize = '14px';
      });
      contactMessage.style.fontSize = '14px';
      contactButton.style.fontSize = '16px';
    } else {
      contactForm.style.padding = '40px';
      contactInputs.forEach(input => {
        input.style.marginBottom = '20px';
        input.style.padding = '10px';
        input.style.fontSize = '16px';
      });
      contactMessage.style.fontSize = '16px';
      contactButton.style.fontSize = '18px';
    }
  
    // Responsive behavior for the footer
    const footer = document.querySelector('.footer');
    const footerContent = document.querySelector('.footer-content');
    const footerLogo = document.querySelector('.footer-logo');
    const socialLinks = document.querySelectorAll('.social-links li');
    const footerText = document.querySelector('.footer-text');
  
    if (window.innerWidth <= 768) {
      footerContent.style.flexDirection = 'column';
      footerLogo.style.marginBottom = '20px';
      socialLinks.forEach(link => {
        link.style.margin = '10px 0';
      });
    } else {
      footerContent.style.flexDirection = 'row';
      footerLogo.style.marginBottom = '0';
      socialLinks.forEach(link => {
        link.style.margin = '0 15px';
      });
    }
  }
  
  // Run the adjustLayout function on page load and window resize
  window.addEventListener('load', adjustLayout);
  window.addEventListener('resize', adjustLayout);
  