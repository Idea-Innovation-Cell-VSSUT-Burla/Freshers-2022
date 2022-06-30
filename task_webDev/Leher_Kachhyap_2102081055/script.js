// show or hide menu
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // show menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu hide
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu 
const navLink = document.querySelectorAll('nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// navigation scroll
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

// splash screen
const splash = document.querySelector('.splash');
    document.addEventListener('DOMContentLoaded' , (e)=>{
        setTimeout(()=>{
            splash.classList.add('display-none');
        },2000);
})