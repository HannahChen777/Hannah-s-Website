const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClosed = document.getElementById("nav-closed");

/* -------------- Show Menu -------------- */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("show-menu");
    })
}
/* -------------- Show Menu -------------- */


/* -------------- Hidden Menu -------------- */
if(navClosed){
    navClosed.addEventListener('click', ()=>{
        navMenu.classList.remove("show-menu");
    })
}
/* -------------- Hidden Menu -------------- */


/* -------------- Remove Menu If Any Item Has Been Click -------------- */
const navLink = document.querySelectorAll(".nav_link");

function linkAction(){
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener('click', linkAction));
/* -------------- Remove Menu If Any Item Has Been Click -------------- */


/* -------------- Skills ( Accordion ) -------------- */
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");

function skillToggle(){
    let itemClass = this.parentNode.className;

    for(let i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_closed';
    }

    if(itemClass === 'skills_content skills_closed'){
        console.log("yes");
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', skillToggle)
});
/* -------------- Skills ( Accordion ) -------------- */





/* -------------- Portfolio (Swiper) -------------- */
let swiper = new Swiper(".portfolio_container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
/* -------------- Portfolio (Swiper) -------------- */


/* -------------- Show Scroll Up -------------- */
function showScrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    const scrollY = window.pageYOffset;
    if(this.scrollY >= 1000){
        scrollUp.classList.add('show-scrollUp');
    }
    else{
        scrollUp.classList.remove('show-scrollUp');
    }
}
window.addEventListener('scroll', showScrollUp);
/* -------------- Show Scroll Up -------------- */