const bars = document.getElementById("bars");
const cross = document.getElementById("cross");
const navbar = document.getElementById("navbar");

bars.addEventListener("click", () =>{
    navbar.classList.add("active")
})

cross.addEventListener("click", () =>{
    navbar.classList.remove("active")
})