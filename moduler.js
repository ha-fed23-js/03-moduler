// importera funktioner
// Obs! Vi behöver en "package.json" för att det ska fungera när vi inte arbetar i webbläsaren. Skriv: "npm init -y"
import { calculateBalance } from './bankFunctions.js'

let years = 200

// Alternativ loop, med while i stället för for
// let i = 0
// while ( i < years ) {
// 	balance = balance * interest
// 	i++
// }

let customerBalance = calculateBalance(years)
let balanceRounded = Math.round(customerBalance)
console.log(`Efter ${years} år finns det ${balanceRounded} kr på kontot.`);
