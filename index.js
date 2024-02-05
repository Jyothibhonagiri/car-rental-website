const loginelement = document.getElementById("logincontainer");
const main = document.getElementById("container")
const home = document.getElementById("Home")
const card = document.getElementById("card-container");
const e = document.getElementById("reservation")
main.style.display="block";
home.style.display="block";
card.style.display="flex";
loginelement.style.display="none";
e.style.display="none";
function login(){
    loginelement.style.display="flex";
    main.style.display="none";
    home.style.display="none";
    e.style.display="none";
    card.style.display="none";

}

 function bbb(){
    e.style.display="block";
    card.style.display="none";
    main.style.display="none";
    home.style.display="none";
    loginelement.style.display="none";
 }