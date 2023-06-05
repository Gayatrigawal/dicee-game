randomNumber1= Math.floor(Math.random()*6)+1;

var randomDiceNumber= "dice"+ randomNumber1 +".png";

var randomImageSource = "images/" + randomDiceNumber;

var image1 = document.querySelectorAll("img")[0]; // in query selector we have to use the tags in html like img , h1 etc
image1.setAttribute("src",randomImageSource);   //this is used ot change the attributes that we need to change

// now we'll do the same for the second dice image

randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceNumber2 ="images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceNumber2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win!";
}
else if (randomNumber2<randomNumber1){
    document.querySelector("h1").innerHTML="player 2 win !";
}
else{
    document.querySelector("h1").innerHTML="draw!";
}





