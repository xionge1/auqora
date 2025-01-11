// use javascript to load static html using fetch()

console.log("hey! I am new to web development and still learning! I am looking for an internship in either front-end or back-end development.");


fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading the navbar:', error));
      

// const fs = require('fs');
// const dir = './img/Main-Artworks';

// fs.readdir(dir, (err, files) => {
//   console.log(files.length);
// });


// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();

// const dir = path.join(__dirname, 'img/Main-Artworks');

// app.get('/images', (req, res) => {
//   fs.readdir(dir, (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: 'Unable to scan directory' });
//     }
//     // Return the list of files to the client
//     res.json(files.filter(file => file.endsWith('.png') || file.endsWith('.jpg')));
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// document.addEventListener('DOMContentLoaded', function() {
//   const imageFolder = "img/Main-Artworks/";
//   const gallery = document.getElementById("artworks-gallery");

//   // Fetch the list of images from the server
//   fetch('/images')
//     .then(response => response.json())
//     .then(imageFiles => {
//         imageFiles.forEach(function(image) {
//             let imgElement = document.createElement("img");
//             imgElement.src = imageFolder + image;
//             imgElement.alt = "Artwork";
//             imgElement.classList.add("artwork-img");

//             gallery.appendChild(imgElement);
//         });
//     })
//     .catch(error => console.log("Error fetching image list:", error));
// });

// START of EventListener to load images in gallery (artworks.html)
/*document.addEventListener('DOMContentLoaded', function() {
  // Check if the URL contains the specific filename
  if (window.location.pathname.includes('artworks.html')) {
      // Your image loading code here
      const imageFiles = [
          "ariadne repainted 2024 flat color.jpg", 
          "aubrey flat.jpg",
          "clouds copy.jpg", 
          "clouds.jpg", 
          "dog tr6 gamer.jpg", 
          "firewatch.jpg",
          "IMG_0412.jpg", 
          "IMG_0512.jpg", 
          "IMG_0549.jpg", 
          "IMG_0565.jpg",
          "IMG_0598.jpg", 
          "IMG_2071.jpg", 
          "mel-sketch.jpg", 
          "Simply_Com.jpg",
          "Still_Life_2.jpg", 
          "transistor-sybil.jpg"
      ];

      const imageFolder = "img/Main-Artworks/";
      const gallery = document.getElementById("artworks-gallery");

      imageFiles.forEach(function(image) {
          let imgElement = document.createElement("img");
          imgElement.src = imageFolder + image;
          imgElement.alt = "Artwork";
          imgElement.classList.add("artwork-img");
          gallery.appendChild(imgElement);
      });
  }
});*/


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