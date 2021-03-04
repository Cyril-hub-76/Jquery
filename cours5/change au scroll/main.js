// console.log(window);

//let p = document.querySelector(".text");
//console.log(p);
// window.addEventListener("scroll", function () {
//     console.log(window.scrollY); 
//     if (window.scrollY > 400) {  //permet d'agir sur le scroll
//         p.classList.add("changeBackground"); //permet d'agir sur les classes
//     }else {(p.classList.remove("changeBackground"));
//     }
//  })

 // creer un ecart qui affiche la position du scroll
let p = document.querySelector(".text");
let a = document.querySelector(".scroll");
let encart = document.querySelector(".scroll"); // querySelector = élément

window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {  //permet d'agir sur le scroll
         p.classList.add("changeBackground"); //permet d'agir sur les classes
         a.classList.add("scroll2");
     }else {(p.classList.remove("changeBackground"));
     encart.innerHTML = "postion " + window.scrollY + " px"; // réccupère windows.scrollY via innerHTML et inject dans variable encart
     a.classList.remove("scroll2");
     }
 })




