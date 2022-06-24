var randomNumber1 = Math.random()*6;
randomNumber1++;
randomNumber1=Math.floor(randomNumber1);
var k="";
if(randomNumber1===1)
    k="images/dice1.png";
else if(randomNumber1===2)
    k="images/dice2.png";
    else if(randomNumber1===3)
    k="images/dice3.png";
    else if(randomNumber1===4)
    k="images/dice4.png";
    else if(randomNumber1===5)
    k="images/dice5.png";
    else if(randomNumber1===6)
    k="images/dice6.png";

    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",k);

var randomNumber2 = Math.random()*6;
randomNumber2++;
randomNumber2=Math.floor(randomNumber2);
var p="";
if(randomNumber2===1)
    p="images/dice1.png";
else if(randomNumber2===2)
    p="images/dice2.png";
    else if(randomNumber2===3)
    p="images/dice3.png";
    else if(randomNumber2===4)
    p="images/dice4.png";
    else if(randomNumber2===5)
    p="images/dice5.png";
    else if(randomNumber2===6)
    p="images/dice6.png";
var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",p);


    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    }
    else if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML="DRAW";
    }