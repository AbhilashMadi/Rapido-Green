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

window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 100){
        header.classList.add("active");
    } else {
        header.classList.remove("acive");
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