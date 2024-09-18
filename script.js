// use javascript to load static html using fetch()

console.log("hey! I am new to web development and still learning! I am looking for an internship in either front-end or back-end development.");


fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading the navbar:', error));
      

