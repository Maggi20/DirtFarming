function menu() {
    document.getElementById("Menu").style.opacity = 1;
}
function menuClose() {
    document.getElementById("Menu").style.opacity = 0;
}
function shovelSpeed() {
    if(v.dirtscore >= v.shovelSpeedPrice && v.shovelSpeedUpgrade != 7){
        v.dirtscore -= v.shovelSpeedPrice;
        v.shovelSpeedvar -= 0.25;
        v.dirtyShovelSpeed -= 0.5;
        v.dirtyshovelDelay -= 0.25;
        waitBeforeClickDelay -= 750;
        cartIsFullDelay -= 750;
        v.shovelSpeedUpgrade += 1;
        v.shovelSpeedPrice = Math.round(v.shovelSpeedPrice * 1.5);
        document.getElementById("DirtScore").innerHTML = v.dirtscore + " Dirt";
        document.getElementById("Shovel").style.animationDuration = v.shovelSpeedvar + "s";
        document.getElementById("DirtyShovel").style.animationDelay = v.dirtyshovelDelay + "s";
        document.getElementById("DirtyShovel").style.animationDuration = v.dirtyShovelSpeed + "s";
        document.getElementById("buttonShovelSpeed").innerText = "Shovel speed increse 0.75s " + v.shovelSpeedPrice + "dirt"
        if(v.shovelSpeedUpgrade == 7) {
            document.getElementById("buttonShovelSpeed").innerText = "MAX"
            document.getElementById("buttonShovelSpeed").style.color = "red"
        }
    }
}
function cartSpeed() {
    if(v.dirtscore >= v.cartSpeedPrice && v.cartSpeedUpgrade != 9) {
        v.dirtscore -= v.cartSpeedPrice;
        v.cartSpeedUpgrade += 1;
        v.cartSpeedvar -= 1;
        cartdelay -= 1000;
        document.getElementById("DirtScore").innerHTML = v.dirtscore + " Dirt";
        v.cartSpeedPrice = Math.round(v.cartSpeedPrice * 1.5);
        document.getElementById("Cart").style.animationDelay = "0s, " + cartdelay/1000 + "s";
        document.getElementById("Cart").style.animationDuration = v.cartSpeedvar + "s";
        document.getElementById("buttonCartSpeed").innerText = "Cart speed increse 0.75s " + v.cartSpeedPrice + " dirt";
    }
    if(v.cartSpeedUpgrade == 9) {
        document.getElementById("buttonCartSpeed").innerText = "MAX"
        document.getElementById("buttonCartSpeed").style.color = "red"
    }
}
function cartInvetory() {
    if(v.dirtscore >= v.cartInvetoryPrice && v.cartInvetoryUpgrade != 15) {
        v.dirtscore -= v.cartInvetoryPrice;
        v.cartInvetoryUpgrade += 1; 
        v.cartInvetory += 1;
        v.cartInvetoryPrice = Math.round(v.cartInvetoryPrice * 1.2);
        document.getElementById("DirtScore").innerHTML = v.dirtscore + " Dirt";
        document.getElementById("buttonCartInvetory").innerText = "Cart invetory increse +1 " + v.cartInvetoryPrice + "dirt";
    }
    if(v.cartSpeedUpgrade == 15) {
        document.getElementById("buttonCartInvetory").innerText = "MAX";
        document.getElementById("buttonCartinvetory").style.color = "red";
    }
    alert("HAHA");
}
function goldenShovel(){
    alert("HAHA");
}   
