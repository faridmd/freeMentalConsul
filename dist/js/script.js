// Navbar Fixed
 window.onscroll = function() {
    const header = document.querySelector('header');
    const navDark = document.querySelectorAll('.navbar');
    const hamburgerDark = document.querySelectorAll('span.hamburger-line');
    const fixedNav = header.offsetTop;


    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        navDark[0].classList.remove('navbar-light');
        navDark[0].classList.add('navbar-dark');
        for(let i = 0; i <= 2;i++){
            hamburgerDark[i].classList.remove('hamburger-light');
            hamburgerDark[i].classList.add('hamburger-dark');
        }
        for(let j = 0; j <= 6;j++){
            navDark[j].classList.remove('md:navbar-light');
            navDark[j].classList.add('md:navbar-dark');
        }
        
    } else {
        header.classList.remove('navbar-fixed');
        navDark[0].classList.add('navbar-light');
        navDark[0].classList.remove('navbar-dark');
        for(let i = 0; i <= 2;i++){
            hamburgerDark[i].classList.add('hamburger-light');
            hamburgerDark[i].classList.remove('hamburger-dark');
        }
        for(let j = 0; j <= 6;j++){
            navDark[j].classList.add('md:navbar-light');
            navDark[j].classList.remove('md:navbar-dark');
        }
    }
 }

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

