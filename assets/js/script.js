/*
 ** #PRELOADING
 */

const loadElement = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  loadElement.classList.add("loaded");
});

/*
** #NAVBAR MOBILE TOGGLE
*/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function (){
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

navToggler.addEventListener("click",toggleNavbar);

/*
** #HEADER ON ACTIVE
*/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/*
** #STATS COUNTER
*/

const countElems = document.querySelectorAll(".count");
const interval = 5000;

countElems.forEach((countElem) => {
    let startAt = 0;
    let endAt = parseInt(countElem.getAttribute("data-stats"))
    
    const duration = Math.floor(interval/endAt);
    
    let counter = setInterval(() => {
        startAt += 1;
        countElem.textContent = startAt;

        if(startAt == endAt){
            clearInterval(counter);
        }
    }, duration);
})


/*
** - #SCROLL REVEAL
*/

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {

  revealElements.forEach((element) => {
    if(element.getBoundingClientRect().top <= window.innerHeight/1.2){
        element.classList.add("revealed");
    } else {
        element.classList.remove("revealed")
    }
  })
  
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);