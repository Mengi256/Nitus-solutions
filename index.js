const menu = document.querySelector("#menu");
const mainNav  = document.querySelector(".navigation");

menu.addEventListener("click", function(){
  menu.classList.toggle("show")
  mainNav.classList.toggle("show");
  if (mainNav.classList.contains("show")) {
    mainNav.style.boxShadow = "4px 4px 4px rgba(0,0,0,0.1)";
  } else {
    mainNav.style.boxShadow = "none";
  }
});
