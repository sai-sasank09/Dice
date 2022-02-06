var random1=Math.floor(Math.random()*6) + 1;

var randomImage= "dice" + random1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var random2=Math.floor(Math.random()*6) + 1;

var randomimage2="dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

if(random1>random2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if (random2>random1){
  document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}

else{
  document.querySelector("h1").innerHTML="🎌Draw🎌";
}
