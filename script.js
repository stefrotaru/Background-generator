var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	// Adding the new colors to the button's background too!
	button.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
};

// This function creates random colors (grabbed it from stackoverflow).
// Appears to be 'randomly'(pun intended) failing. Maybe someone can help?
// (fail example: The specified value "#f7dcc" does not conform to the 
// required format.)
function randomColor() {
	var newColor1 = '#'+ Math.floor(Math.random() * 16777215).toString(16);
	var newColor2 = '#'+ Math.floor(Math.random() * 16777215).toString(16);
	
	// Adding the random colors to the input value 
	color1.value = newColor1;
	color2.value = newColor2;

	// Adding the random colors to the background
	body.style.background = 
	"linear-gradient(to right, " 
	+ newColor1 
	+ ", " 
	+ newColor2
	+ ")";
	
	// Wanted to set the new colors to show on the button as well, so
	// here it is!
	button.style.background = 
	"linear-gradient(to right, " 
	+ newColor1 
	+ ", " 
	+ newColor2
	+ ")";

	css.textContent = body.style.background + ";";
};

body.onload = setGradient()

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);