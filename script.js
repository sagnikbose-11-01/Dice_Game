

let randomVariable1 = Math.random()*6;
randomVariable1 = Math.floor(randomVariable1) + 1;
// console.log(randomVariable1)

let randomVariable2 = Math.random()*6;
randomVariable2 = Math.floor(randomVariable2) + 1;

let p1 = document.querySelector(".img1");
p1.setAttribute("src", "./images/dice"+randomVariable1+".png")


let p2 = document.querySelector(".img2");
p2.setAttribute("src", "./images/dice"+randomVariable2+".png")


if(randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(randomVariable1 < randomVariable2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}