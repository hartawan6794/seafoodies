// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
const searchForm = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');
const shoppingCart = document.querySelector('.shopping-cart');

//ketika cart icon di klik
document.querySelector('#shopping-cart-btn').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// ketika searchbox menu di klik
document.querySelector('#search-btn').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
}

// ketika humberger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// ketika klik diluar sidebar navbar hilang
const humberger = document.querySelector('#hamburger-menu');
const searchbtn = document.querySelector('#search-btn')
const shoppingBtn = document.querySelector('#shopping-cart-btn');

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail-button');
const closeModal = document.querySelector('.close-icon');

itemDetailButton.onclick = (e) => {
    itemDetailModal.style.display = 'flex'
    e.preventDefault();
}

closeModal.onclick = (e) => {
    itemDetailModal.style.display = 'none'
    e.preventDefault();
}

document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if(!searchbtn.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }

    if(!shoppingBtn.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }

    if(!itemDetailButton.contains(e.target) && !itemDetailModal.contains(e.target)){
        // itemDetailModal.style.display = 'none'
    }
})