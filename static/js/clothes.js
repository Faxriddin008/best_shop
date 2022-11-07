let cartIcon = document.querySelector('#cart__icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close__cart')
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add('active');
}
// Close Cart
closeCart.onclick = () => {
    cart.classList.remove('active');
}
// Card working

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
// Making function

function ready() {
    let removeCartButtons = document.getElementsByClassName('cart__remove');
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    // Quantity Changes
    let quantityInputs = document.getElementsByClassName('cart__quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged); 
    }
    // Add to  cart
    let addCart = document.getElementsByClassName('add__card');
    for (let i = 0; i < addCart.length; i++) {
        let button = addCart[i]
        button.addEventListener('click', addCartClicked);
    }
    document
        .getElementsByClassName('btn__buy')[0]
        .addEventListener('click', buyButtonsClicked);
}
//Buy botton
function buyButtonsClicked() {
    alert('Your Order is placed');
    let cartContent = document.getElementsByClassName('cart__content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Quantity Changes
function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function addCartClicked(event) {
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product__title')[0].innerText;
    let price = shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('product__img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart__box");
    let cartItems = document.getElementsByClassName('cart__content')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cart__product_title');
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Your have already add this item to cart");
            return;
        }
    }

    var cartBoxContent = ` 
                            <img src="${productImg}" alt="" class="cart__img">
                            <div class="detail__box">
                                <div class="cart__product_title">${title}</div>
                                <div class="cart__price">${price}</div>
                                <input class="cart__quantity" type="number" value="1">
                            </div>
                            <i class='bx bxs-trash-alt cart__remove' ></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart__remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart__quantity')[0].addEventListener('change', quantityChanged);
}
// Total

function updatetotal() {
    let cartContent = document.getElementsByClassName('cart__content')[0]
    let cartBoxes = cartContent.getElementsByClassName('cart__box')
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart__price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart__quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('UZS', ""));
        let quantity = quantityElement.value;
        total = total + price * quantity;
        
    }
    // if price Content some Cents Value
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total__price')[0].innerText = total * 1000 +'UZS';
}
