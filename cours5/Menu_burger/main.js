let btn = document.querySelector(".iconBurger");
let nav = document.querySelector(".nav2");
console.log(btn, nav);
btn.addEventListener("click", function (){
    nav.classList.toggle("open");
})