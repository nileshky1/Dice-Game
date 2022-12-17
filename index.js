//alert("working");
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
//alert(randomNumber1);

var image1 = "dice" + randomNumber1 + ".png";

var randomeImageSource1 = "images/" + image1;
document.querySelectorAll("img")[0].src = randomeImageSource1;
//document.querySelectorAll("img")[1].src = randomeImageSource;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
//alert(randomNumber1);

var image2 = "dice" + randomNumber2 + ".png";

var randomeImageSource2 = "images/" + image2;
document.querySelectorAll("img")[1].src = randomeImageSource2;


if(randomNumber1 > randomNumber2)
{
  document.querySelector("H1").innerHTML = "🚩 Player1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("H1").innerHTML = "Player2 Wins! 🚩";
}
else document.querySelector("H1").innerHTML = "Draw!";

document.querySelector("H1").fontSize = "small";
