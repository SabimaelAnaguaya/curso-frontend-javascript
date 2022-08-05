const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container')

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

/* ================================ 
    LISTA DE PRODUCTOS
 ================================ */

const listaProductos = [];

listaProductos.push({
    name: 'bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

listaProductos.push({
    name: 'Monitor',
    price: 220,
    image: 'https://ohmygeek.net/wp-content/uploads/2021/06/Huawei-Display-23.8.jpg'
});

listaProductos.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/11833898/pexels-photo-11833898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

listaProductos.push({
    name: 'bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

listaProductos.push({
    name: 'Monitor',
    price: 220,
    image: 'https://ohmygeek.net/wp-content/uploads/2021/06/Huawei-Display-23.8.jpg'
});

listaProductos.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/11833898/pexels-photo-11833898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr){
    for(producto of listaProductos){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', producto.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        /* ======================================= */
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('div');
        productPrice.innerText= '$' + producto.price;
    
        const productName = document.createElement('div');
        productName.innerText= '$' + producto.name;
    
        productInfoDiv.append(productPrice, productName);
    
        /* ======================================= */
        const productInfoFigure  = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        /* ======================================= */
    
        productInfo.appendChild(productInfoDiv); 
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    
    }
}

renderProducts(listaProductos);