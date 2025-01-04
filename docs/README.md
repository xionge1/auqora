# Hello
Art portfolio made using html, css, js



[In-progress notes](/docs/TODO.md)

[md file cheatsheet](https://www.youtube.com/watch?v=_PPWWRV6gbA&ab_channel=WebDevSimplified)


# Inserting in a navbar/header

To help make the pages more readible, I used javascript to dynamically load in the navbar which has been seperated into a new page.

The line for loading the navbar is as follows:

`document.getElementById('navbar-placeholder').innerHTML = data;`

To insert in navbar to any page, create div and add id = "navbar-placeholder".

For example, in artworks.html, the line `<div class="d-flex justify-content-end w-10" id = "navbar-placeholder"> </div>` does exactly this.

# Commit Info
How to undo one commit:
`git reset --soft HEAD~1`

