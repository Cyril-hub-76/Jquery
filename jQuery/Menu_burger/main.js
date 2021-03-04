// let btn = document.querySelector(".iconBurger");
// let nav = document.querySelector(".nav2");
// console.log(btn, nav);
// btn.addEventListener("click", function (){
//     nav.classList.toggle("open");
// })
$(document).ready(function() {

     // action au clique == p.addEvent.Listener....
    $(".iconBurger").click(function() {
            $(".nav2").addClass(".nav");

     })
    // changer le background
    // $("h2").click(function() {
    //     $("h2").css("background-color", "yellow");
    // });

});