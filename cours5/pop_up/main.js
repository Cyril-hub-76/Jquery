let click = document.querySelector(".on");
let aff = document.querySelector(".alert");
let ok = document.querySelector(".ok")
click.addEventListener("click", function () {
    aff.classList.remove("hide");
})
ok.addEventListener("click", function () {
    aff.classList.add("hide");
})