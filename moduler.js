let years = 5

function calculateBalance() {
	let balance = 25000  // saldot på kontot
	let interest = 1.05  // 5% ränta
	// Efter 5 år:
	for( let i=0; i < years; i++ ) {
		balance = balance * interest
		console.log(`År ${i + 1} har vi ${balance} kr på kontot.`);
	}
	return balance
}

// Alternativ loop, med while i stället för for
// let i = 0
// while ( i < years ) {
// 	balance = balance * interest
// 	i++
// }

let customerBalance = calculateBalance()
let balanceRounded = Math.round(customerBalance)
console.log(`Efter ${years} år finns det ${balanceRounded} kr på kontot.`);
