// Exportera funktioner för att göra dem tillgängliga från andra filer

function calculateBalance(years) {
	let balance = 25000  // saldot på kontot
	let interest = 1.05  // 5% ränta
	// Efter 5 år:
	for (let i = 0; i < years; i++) {
		balance = balance * interest
		let rounded = Math.round(balance)
		console.log(`År ${i + 1} har vi ${rounded} kr på kontot.`);
	}
	return balance
}

export { calculateBalance }
