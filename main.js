const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleCartShopping);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.toggle('inactive');

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.toggle('inactive');

    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartShopping(){
    
    const isMobileMenuClosed = mobileMenu.classList.toggle('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.toggle('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
}
/* ================================ */

const listaProductos = [];

listaProductos.push({
    name: 'bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

listaProductos.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

listaProductos.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for(producto of listaProductos){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImage = document.createElement('img');
    productImage.setAtribbute('src', producto.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-card')

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('div');
    productPrice.innerText= '$' + producto.price;

    const productName = document.createElement('div');
    productName.innerText= '$' + producto.Name;

    const productInfoFigure  = document.createElement('div');

}