// use javascript to load static html using fetch()

console.log("hey! I am new to web development and still learning! I am looking for an internship in either front-end or back-end development.");


fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading the navbar:', error));
      



document.addEventListener('DOMContentLoaded', function() {
  // Check if the URL contains the specific filename
  if (window.location.pathname.includes('artworks.html')) {
      const imageFolder = "img/Main-Artworks/";
      const gallery = document.getElementById("artworks-gallery");

      // Fetch the text file containing the image file names
      fetch('image_names.txt')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Failed to load image file list');
              }
              return response.text(); // Read the file as text
          })
          .then(data => {
              // Split the file content by commas to get an array of image file names
              const imageFiles = data.split(',').map(file => file.trim());

              // Loop through the image files and create image elements
              imageFiles.forEach(function(image) {
                  let imgElement = document.createElement("img");
                  imgElement.src = imageFolder + image;
                  imgElement.alt = "Artwork";
                  imgElement.classList.add("artwork-img");
                  imgElement.style.cursor = "pointer"; // Make it clickable

                  // Add click event to open modal
                  imgElement.addEventListener("click", function () {
                      const modalImage = document.getElementById("modalImage");
                      modalImage.src = this.src; // Set the modal image source
                      const artworkModal = new bootstrap.Modal(document.getElementById("artworkModal"));
                      artworkModal.show(); // Show the modal
                  });

                  gallery.appendChild(imgElement);
              });

              
          })
          .catch(error => console.error('Error loading images:', error));
  }
});
// END of artworks



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("navbar-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// END of JS for hamburger menu