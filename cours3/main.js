let titre = document.querySelector("h1");
console.log(titre);
titre.classList.add("maClasse");

let flex = document.querySelector("div");
flex.classList.add("flexbox");

let img = document.querySelector("img")
console.log(img);
img.getAttribute("src");
console.log(img.getAttribute("src")) /// réccupéré les attibuts
img.setAttribute("src", "https://placehold.it/200"); // On vient de modifier l'attribut de img
/// exercice, modifier les attributs d'un lien et son nom. Passer de exemple.com à google.com
let link = document.querySelector("a");



link.setAttribute("href", "https://google.com");
link.setAttribute("target",  "blank"); /// selection de target ---- modification de l'attribut blank
link.innerHTML = "google.com";


