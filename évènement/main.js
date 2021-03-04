

// let ligne = document.querySelector("tbody tr");
// console.log(ligne);
// for (i = 0; i < ligne.length; i++) {
// ligne.addEventListener("click", function(){
//     ligne.classList.toggle("background");
// })
// }

let lignes = document.querySelectorAll("tbody tr");
for (let i = 0; i < lignes.length; i++) {
    lignes[i].addEventListener("click", function() {
        lignes[i].classList.toggle("background");
    })
}
let link = document.querySelector("a");
link.addEventListener("click", function(event) {
    event.preventDefault(); //désactiver le lien

    let cible = link.getAttribute("href"); //recupérer le lien

    let reponse = confirm("voulez vous sortir du site ?") // confirmation
    if (reponse == true) { // si confirmation vrai
        window.location.href = cible; // affecter l'url
    }else {
        alert("merci de rester avec nous");
    }
})
