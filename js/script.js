// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// ketika klik diluar sidebar navbar hilang
const humberger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

