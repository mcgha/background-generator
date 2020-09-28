var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // because its a class, just in like css .class
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
//  + ");"; <--will not work. Do not use ; to set css value
    css.textContent = body.style.background + ";";
}
function randomColor() {
    color=' rgb('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+')';
    return color;
}

function generateRandomBackground() {
    randomColor1 = randomColor();
//    console.log(randomColor1);
    randomColor2 = randomColor();
//    console.log(randomColor2);
    body.style.background = 
    "linear-gradient(to right, " 
    + randomColor1 
    + ", " 
    + randomColor2 
    + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", generateRandomBackground);
