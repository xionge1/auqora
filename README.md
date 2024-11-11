# auqora
Art portfolio made using html and css

Inserting in a navbar/header

`document.getElementById('navbar-placeholder').innerHTML = data;`

To insert in navbar to any page, create div and add id = "navbar-placeholder".
For example, in artworks.html, the line `<div class="d-flex justify-content-end w-10" id = "navbar-placeholder"> </div>` does exactly this.

How to undo one commit:
`git reset --soft HEAD~1`