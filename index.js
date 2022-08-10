/* change the dice numbers upon refresh */
/*change the first die at random to a number from 1 to 6*/

var randomNumber1 = Math.floor(Math.random()*6)+1;

/*assign the random number to create the name of the image file*/
var dice1= "images/dice" + randomNumber1 + ".png"; 

/*choose a random number for the second die */
var randomNumber2 = Math.floor(Math.random()*6)+1;

/*assign the random number to create the name of the image file*/

var dice2= "images/dice" + randomNumber2 + ".png"; 

/* assign the image associated with the random numbers to the images */
document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!🚩";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}