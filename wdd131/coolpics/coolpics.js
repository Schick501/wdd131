document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');
  const galleryImages = document.querySelectorAll('.gallery img');
  const imageViewer = document.getElementById('image-viewer');
  const viewerContent = document.getElementById('viewer-content');
  const closeViewer = document.querySelector('.image-viewer .close');

  // Toggle menu visibility on small screens
  menuToggle.addEventListener('click', function() {
      menuItems.classList.toggle('show');
  });

  // Display image viewer when a gallery image is clicked
  galleryImages.forEach(image => {
      image.addEventListener('click', function() {
          // Scale the clicked image
          image.classList.toggle('scaled');
      });
  });

  // Close the image viewer
  closeViewer.addEventListener('click', function() {
      imageViewer.style.display = 'none';
  });

  // Close the image viewer when clicking outside the image
  imageViewer.addEventListener('click', function(event) {
      if (event.target === imageViewer) {
          imageViewer.style.display = 'none';
      }
  });
});