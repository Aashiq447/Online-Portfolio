
window.addEventListener('DOMContentLoaded', function() {
  // Set background images for sections
  //document.getElementById('about').style.backgroundImage = "url('Work images/istockphoto-478158548-612x612.jpg')";
  //document.getElementById('projects').style.backgroundImage = "url('Work images/stock-photo-close-view-piles-books-notebooks.jpg')";
  //document.getElementById('skills').style.backgroundImage = "url('Work images/stock-photo-office-desk-table-blank-notebooks.jpg')";
  //document.getElementById('contact').style.backgroundImage = "url('Work images/stock-photo-wireless-devices-on-workplace.jpg')";//

  // Retrieve projects data and populate the project list
  var projects = [
      {
          title: "Project 1",
          image: "project1.jpg",
          description: "This is project 1"
      },
      {
          title: "Project 2",
          image: "project2.jpg",
          description: "This is project 2"
      }
      // Add more project objects as needed
  ];

  var projectList = document.getElementById('projectList');
  for (var i = 0; i < projects.length; i++) {
      var project = projects[i];
      var projectItem = document.createElement('div');
      projectItem.classList.add('project');
      projectItem.innerHTML = `
          <h3>${project.title}</h3>
          <img src="${project.image}" alt="${project.title}">
          <p>${project.description}</p>
      `;
      projectList.appendChild(projectItem);
  }

  // Retrieve skills data and populate the skill list
  var skills = ["HTML", "CSS", "Java", "Python", "JavaScript", "The Framework of React"];

  var skillList = document.getElementById('skillList');
  for (var j = 0; j < skills.length; j++) {
      var skill = skills[j];
      var skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillList.appendChild(skillItem);
  }

  // Handle form submission
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Perform form submission logic here
  });
});


////   View Button
// Get all elements with the class "view-more-button"
const viewMoreButtons = document.querySelectorAll('.view-more-button');

// Add event listeners to each button
viewMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the image URLs from the "data-images" attribute
    const imageUrls = this.getAttribute('data-images').split(',');

    // Create a new image element for each image URL
    const images = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });

    // Create a container for the images
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-slideshow';
    
    // Add each image to the container
    images.forEach(image => {
      imageContainer.appendChild(image);
    });

    // Open a simple lightbox or modal to display the images
    // You can use a library like Lightbox or create your own modal

    // Append the image container to the document
    document.body.appendChild(imageContainer);
  });
});
//// 