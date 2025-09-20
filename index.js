const menu = document.querySelector("#menu");
const mainNav  = document.querySelector(".navigation");
const logoName = document.querySelector(".logo-name")
const header = document.querySelector("#header")
const logo = document.querySelector(".logo")
const hero = document.querySelector(" .hero")

const heroSection = document.querySelector('.hero-section')
menu.addEventListener("click", function(){
  menu.classList.toggle("show")
  mainNav.classList.toggle("show");
  logoName.classList.toggle("show")
  header.classList.toggle("show")
  logo.classList.toggle("show")
  hero.classList.toggle("show")
  heroSection.classList.toggle("show")

});

document.addEventListener("DOMContentLoaded",function(){
  const service_link = document.querySelector(" .service-link")
 const service_container = document.querySelector(".service-container")
 service_link.addEventListener("click",function(e){
  e.preventDefault()
 service_container.style.display = "block"})

});