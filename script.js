const berger = document.getElementById("hamberger");
const navli  = document.getElementById("navlist");

berger.addEventListener("click", ()=>{
     navli.classList.toggle("navlist-active");
})