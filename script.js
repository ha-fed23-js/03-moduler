// Kodexempel från genomgången

// JavaScript lägger automatiskt till "var" om det inte finns i koden
v = 123
console.log('var är knasigt: ', v);
var v

// Undvik var, använd let
let x
x = 20


hello()


function hello() {
	console.log('Hello!');
}

if( true ) {
	var v2 = 'v2 lokal variabel (men det struntar var i)'
	console.log('v2: ', v2);
	let x2 = 'x2 lokal variabel'
	console.log('x2: ', x2);
}
console.log('v2: ', v2);
let x2 = 'x2 global variabel'
console.log('x2: ', x2);
