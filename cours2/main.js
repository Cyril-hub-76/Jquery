// console.log(window);
// console.log(innerWidth);
// console.log(window.document);

//selectionner les paragraphes
// let tableauP = document.getElementsByTagName('p');
// console.log(tableauP);
//
// afficher le contenu du paragraphe
// let tableauP = document.getElementsByTagName('p')[4].innerHTML;
// console.log (tableauP);

// selectionner les classes
//let intro = document.getElementsByClassName("nomDelaClasse");

// selectionner un id
// let intro = document.getElementById("titre");
// console.log(titre);

/// boucle for sur <p>
// let tableauP = document.getElementsByTagName('p');
// // console.log(tableauP);
// for (let i = 0; i < tableauP.length; i++) {
//     console.log(tableauP[i]);
// }

/// boucle for sur une class

// let intro = document.getElementsByClassName("introduction");
// // console.log(intro);
//
// for (let i = 0; i < intro.length; i++) {
//     console.log(intro[i]);
// }

///// insertion d'élément (titre h2)

// let h2 = document.createElement('h2');
//
// // <h2></h2>
//
// let contenuH2 = document.createTextNode("mon titre");
//
// // création mon titre
//
// h2.append(contenuH2);
//
// // <h2>mon titre </h2>
//
// let position = document.getElementById("titre").parentNode;
//
// position.insertBefore(h2, document.getElementById("titre"));
// position.insertBefore(h2, document.getElementById ("titre").nextSibling); /// pour mettre après un objet

// exo ajouter un ul > li > lundi juste après le h2
//
// let ul = document.createElement("ul");
// let li = document.createElement("li");
// let contLi = document.createTextNode("lundi");
// ul.appendChild(li);
// li.appendChild(contLi);
// let positionUl = document.getElementsByTagName("h2")[0];
// let positionH2 = positionUl.parentNode;
// positionH2.insertBefore(ul, positionUl.nextSibling);
//
//
// let h1Style = document.querySelector("h1");
// console.log(h1Style);
// h1Style.style.backgroundColor = "#DC143C";
//
// let pStyle = document.querySelector("p");
// pStyle.style.width = "500px";
// pStyle.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//
//
// let paraStyle = document.querySelectorAll("p");
// for (let i = 0; i < paraStyle.length; i++ ) {
//     paraStyle[i].style.color = "green";
// }


// ajoutr un p avec un span (lorem), modifez le fontsize 100px et la couleur green

// let span = document.createElement("p");
// span.innerHTML = "<span>bonjour</span>";
// let positionSpan = document.getElementById("titre").parentNode;
// positionSpan.insertBefore(span, document.getElementById("titre").nextSibling);
// let span1 = document.querySelector('span');
// span.style.color ="green";
// span.style.fontSize = "100px";
