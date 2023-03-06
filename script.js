let v = {
    firstTime: true,
    dirtscore: 0,
    dirtInCart: 0,
    cartInvetory: 5,
    shovelStrenkt: 1,
    shovelSpeedvar: 2,
    dirtyShovelSpeed: 4,
    dirtyshovelDelay: 2,
    cartSpeedvar: 5,
    shovelSpeedUpgrade: 0,
    shovelSpeedPrice: 20,
    cartSpeedvar: 10,
    cartSpeedPrice: 20,
    cartSpeedUpgrade: 0,
    cartInvetoryPrice: 50,
    cartInvetoryUpgrade: 0
}
let cartCanMove = true;
let cartFull = false;
let canClick = true;
let waitBeforeClickDelay = 6200;
let cartIsFullDelay = 5600;
let cartdelay = 10000;

if (v.firstTime) {
    v.firstTime = false;
    save();
}
setup()
function setup() { 
    load();
    if (v.cartInvetory === v.dirtInCart){
        canClick = false;  
        cartFull = true;
        Cart.style.backgroundImage = "url(Images/FullDirtCart.png)";
    }
    for (let i = v.shovelSpeedUpgrade; i > 0; i--) {
        waitBeforeClickDelay -= 750;
        cartIsFullDelay -= 700;
    }
    for (let e = v.cartSpeedUpgrade; e > 0; e--) {
        cartdelay -= 1000;
    }
    if (v.shovelSpeedUpgrade == 7) {
        document.getElementById("buttonShovelSpeed").innerText = "MAX"
        document.getElementById("buttonShovelSpeed").style.color = "red"
    } else {
        document.getElementById("buttonShovelSpeed").innerText = "Shovel speed increse 0.75s " + v.shovelSpeedPrice + " dirt"
    }
    if (v.cartSpeedUpgrade == 9) {
        document.getElementById("buttonCartSpeed").innerText = "MAX"
        document.getElementById("buttonCartSpeed").style.color = "red"
    } else {
        document.getElementById("buttonCartSpeed").innerText = "Cart speed increse 0.75s " + v.cartSpeedPrice + " dirt";
    }
    if (v.cartInvetoryUpgrade == 15) {
        document.getElementById("buttonCartInvetory").innerText = "MAX"
        document.getElementById("buttonCartInvetory").style.color = "red"
    } else {
        document.getElementById("buttonCartInvetory").innerText = "Cart speed increse 0.75s " + v.cartSpeedPrice + " dirt";
    }
    document.getElementById("Shovel").style.animationDuration = v.shovelSpeedvar + "s";
    document.getElementById("DirtyShovel").style.animationDelay = v.dirtyshovelDelay + "s";
    document.getElementById("DirtyShovel").style.animationDuration = v.dirtyShovelSpeed + "s";
    document.getElementById("Cart").style.animationDelay = "0s, " + cartdelay/1000 + "s";
    document.getElementById("Cart").style.animationDuration = v.cartSpeedvar + "s";
    document.getElementById("DirtScore").innerHTML = v.dirtscore + " Dirt";
    document.getElementById("DirtInCart").innerHTML = v.dirtInCart + " Dirt in cart";
    setTimeout(save, 10000)
}

function save(){
    localStorage.setItem("variables", JSON.stringify(v))
    setTimeout(save, 10000)
}
function load(){
    v = JSON.parse(localStorage.getItem("variables"))
}

document.getElementById("Dirt").addEventListener("click", function(){
    if(canClick == true){
        document.getElementById("Shovel").classList.add("animateShovel");
        document.getElementById("DirtyShovel").classList.add("animateDirtyShovel");
        cartCanMove = false;
        canClick = false;
        setTimeout(waitBeforeClick, waitBeforeClickDelay)
        setTimeout(cartIsFull, cartIsFullDelay);
    }
});
document.getElementById("Cart").addEventListener("click", function() {
    if(cartCanMove) {
        document.getElementById("Cart").classList.add("animateCart");
        canClick = false;
        setTimeout(cartIsHalf, cartdelay);
    }
});

function waitBeforeClick() {
    document.getElementById("Shovel").classList.remove("animateShovel");
    document.getElementById("DirtyShovel").classList.remove("animateDirtyShovel");
    canClick = true;
    cartCanMove = true;
    if(v.dirtInCart == v.cartInvetory) {
        canClick = false;
    }
}
function cartIsHalf(){
    if(cartFull){
        Cart.style.backgroundImage = "url(Images/EmtyDirtCart.png)";
        cartFull = false;
    }
    v.dirtscore += v.dirtInCart;
    v.dirtInCart = 0;
    document.getElementById("DirtScore").innerHTML = v.dirtscore + " Dirt";
    document.getElementById("DirtInCart").innerHTML = v.dirtInCart + " Dirt in cart";
    setTimeout(cartIsDone, cartdelay);
}
function cartIsDone() {
    canClick = true;
    cartCanMove = true;
    document.getElementById("Cart").classList.remove("animateCart");
}
function cartIsFull() {
    if(v.dirtInCart == v.cartInvetory - 1) {
        Cart.style.backgroundImage = "url(Images/FullDirtCart.png)";
        cartFull = true;
    }
    if(v.dirtInCart + v.shovelStrenkt < v.cartInvetory){
        v.dirtInCart += v.shovelStrenkt;
    }else{
        v.dirtInCart = v.cartInvetory;
    }
    document.getElementById("DirtInCart").innerHTML = v.dirtInCart + " Dirt in cart";
}
function resetvar() {
    v.dirtscore = 0;
    v.dirtInCart = 0;
    v.cartInvetory = 5;
    v.shovelStrenkt = 1;
    v.shovelSpeedvar = 2;
    v.dirtyShovelSpeed = 4;
    v.dirtyshovelDelay = 2;
    v.cartSpeedvar = 10;
    v.shovelSpeedUpgrade = 0;
    v.shovelSpeedPrice = 20;
    v.cartSpeedvar = 10;
    v.cartSpeedPrice = 20;
    v.cartSpeedUpgrade = 0;
    v.cartInvetoryPrice = 50;
    v.cartInvetoryUpgrade = 0;
}
