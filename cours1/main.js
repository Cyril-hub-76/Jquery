// let nom = "cyril";
// console.log (nom);
//
// let age = 42;
// let vrai = true;
// console.log (vrai);
//
// let formule = (null);
// console.log (formule);

// let nonDefine = (undefined);
// console.log = (nonDefine);


// console.log (typeof nom);
// console.log (typeof age);

// age = "test";
// console.log (typeof (age));


// let nombre = 4;
// let nombree = 25.15;

// console.log ( nombre + nombree);


// const ville ="paris";
// console.log (ville);

// ville = "dieppe";   La variable ne peut pas changer



// let tableau =[1, 2, 3];
// console.log (tableau);

// console.log (tableau[2]);


// let semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
//semaine[2]= "samedi"; affectation de variable modifie une variable
// console.log (semaine[2]);


// let tableau1 = ["Méline", 4, "fille", true];
// console.log (typeof (tableau1));

// Objects


// let voiture = {
//     couleur: "rouge",
//     marque: "Renault",
//     vitesse: 220
// };

// console.log (voiture.couleur);

// let personne = {
//     nom: "Dupond",
//     prenom: "Robert",
//     age: 40
// };
// console.log (personne.age);


// fonctions

// function affichage() {
//     console.log("salut");
// }
// affichage();
//
// function moyenne (a, b) {
//     let z = a + b / 2;
//     console.log (z);
// }
// moyenne (2, 2);

//// concaténation

// let a = 10 ;
// let b = 20 ;
// let c = a + b ;
// console.log("la somme des 2 chiffres est " + c);
// console.log("La somme des 2 chiffres est " + (a+b))


// let a = 9;
// let b = 10;
// if (a > b) {
//     console.log("La chiffre " + a + " est suppérieur à " + b );
// }else {
//     console.log("Le chiffre " + a + " est inférieur à " + b );
// }

/// Les conditions

// let a = 10;
// if (a == 10) {    //   "=" affecte une valeur, "==" compare la valeur
//     console.log("Le code est bon.");
// }else {
//     console.log("Le code est érronné");
// }


/// exercice:

/// Si le nombre d'articles est inférieur à 5, pas de promotions.
/// Sinon si le nombre d'articles est supperieur à  5 et inférieur
/// à 10 alors 30% sur le panier, sinon 50% sur le panier


// let article = 5 ;

// if (article <= 5) {
//     console.log("Pas de promotions");
// }else if (article > 5 && article < 10) {
//     console.log("Promotion de 30%");
// }else {
//     console.log("Promotion de 50%");
// /// mémo && = et and...  || == ou
// }

// let juste = true;
// if (juste) {  /// pas besoin de préciser = true, juste devient booleen
//     console.log ("hello");
// }

/// switch
// let couleur = "rouge" ;

// switch (couleur) {

//     case "rouge":
//         console.log("La couleur est rouge");
//         break;
//     case "jaune":
//         console.log("La couleur est jaune");
//          break;
//     case "vert":
//         console.log("La couleur est vert");
//         break;
//         default: console.log("Pas de couleur");
//         break;
// }

/// exercice:

/// Créer un switch pour les jours de la semaine sachant que le jour
/// déclaré est le vendredi

// let jour = "vendredi";
// switch (jour) {

//     case "lundi":
//         console.log("on est lundi");
//         break;
//     case "mardi":
//         console.log("on est mardi");
//         break;
//     case "mercredi":
//         console.log("on est mercredi");
//         break;
//     case "jeudi":
//         console.log("on est jeudi");
//         break;
//     case "vendredi":
//         console.log("on est vendredi");
//         break;
//     case "samdedi":
//         console.log("on est samedi");
//         break;
//     case "dimanche":
//         console.log("on est dimanche");
//         break;
// }

/// boucles for

// for (let i = 0; i < 10; i ++) {
//     console.log(i); boucle for de base
// }

/////////////////////////////////


// tabElement = ["rouge", "vert", "jaune", "violet", "noir"];
// for (let element of tabElement){
//     console.log(element);
//  }

// boucles foreach
// tabElement.forEach(element => {
//     console.log(element);
// });


//
// let table = [4, 5, 85, 14];
// // console.log(table.length);
// for (let i = 0; i < table.length ; i++) {
//     console.log(table[i]);
// }

/// boucles while

// let j = 55;
// while (j < 60) {
//     console.log(j);
//     j++;
// }

/// exercice

// tableau [ 14, "nina", true]
// L'affichage indice 1 => 14 indice 2 => "nina" indice 3 => true

// let table = [14, "nina", true]
// i = 0
// while (i < table.length) {
//     console.log("indice "+ (i+1) + " = " + table[i]);
//     i++;
// }
