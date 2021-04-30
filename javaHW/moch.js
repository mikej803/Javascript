

var containerFluid = document.querySelector('.container-fluid');
var nav = document.createElement('nav');
var anchor1 = document.createElement('a1');
var anchor2 = document.createElement('a2');
var anchor3 = document.createElement('a3');

nav.setAttribute('class','bg-primary p-5 navbar navbar-expand');
.setAttribute('class', 'text-light');

function createAnchor(url, text, css){

    anchor.setAttribute('class', css);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor
    
}

// grab an element that already exists



// create 2 anchor tags 

var homeAnchor = createAnchor("#", "Home", "nav-link active");
var categoriesAnchor = createAnchor("#", "Categories", "nav-link");


// homeAnchor.textContent = "Home"
// homeAnchor.setAttribute('class', "nav-link active");

// var categoriesAnchor = document.createElement('a');
// categoriesAnchor.textContent = "Categories";
// categoriesAnchor.setAttribute('class', 'nav-link');


// create nav bar

var nav = document.createElement('nav');
nav.setAttribute('class', "navbar navbar-expand-lg bg-blue")

nav.append(homeAnchor);
nav.append(categoriesAnchor);

container.append(nav);