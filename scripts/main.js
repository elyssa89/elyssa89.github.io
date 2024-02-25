let myHeading = document.querySelector("h1");
console.log(myHeading);
myHeading.textContent = "Bonjour, monde !";

//DECLARE va
let myVariable;
myVariable = "Bob";	

//sur la meme ligne
let myVariable1 = "Bob";

//retrouver la variable 
myVariable;

//if

let iceCream = "chocolat";
if (iceCream === "chocolat") {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}

//function 

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(4, 7));

// événement 

document.querySelector("html").addEventListener("click", function () {
  alert("Aïe, arrêtez de cliquer !!");
});


// ajouter un changeur d'image 
let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/monkey.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});


// use prompt local storage to add personalized message d'acceuil .

let myButton = document.querySelector('button')


function setUserName(){

let userName = prompt("Veuillez saisir votre nom ");
localStorage.setItem("name" , userName);
myHeading.textContent = "Mozella est cool" + userName;

}

if(!localStorage.getItem("name")){
setUserName();
}else{
	myHeading.textContent = "Mozella is cool" + localStorage.getItem("name");
}

myButton.addEventListener('click' , function(){
	setUserName();
})