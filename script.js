var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor(){
	var letter = "0123456789ABCDEF";
	var color = "#";
	for(var i=0; i<6; i++){
		color += letter[Math.floor(Math.random() * letter.length)];
	}
	return color;
}


window.addEventListener("load",setGradient);

btn.addEventListener("click", function(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


