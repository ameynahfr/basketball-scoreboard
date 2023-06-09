let hcount = 0;
let gcount = 0;

let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");


function addOne(){
    hcount +=1;
    homeScore.textContent= hcount;

}

function addTwo(){
    hcount +=2;
    homeScore.textContent= hcount;
}

function addThree(){
    hcount +=3;
    homeScore.textContent= hcount;
}

function plusOne(){
    gcount +=1;
    guestScore.textContent= gcount;

}

function plusTwo(){
    gcount +=2;
    guestScore.textContent= gcount;
}

function plusThree(){
    gcount +=3;
    guestScore.textContent= gcount;
}