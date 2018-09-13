let css = document.querySelector('h3');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.querySelector('body');
let button = document.querySelector('#generateRandom');


function colorChanger(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", function(){
	colorChanger();
});

color2.addEventListener("input", function(){
	colorChanger();
});

button.addEventListener("click", function(){
	console.log( "#" + Math.floor(100000 + Math.random() * 900000));

});