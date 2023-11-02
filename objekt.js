let student1 = {
	name: 'Harry',
	year: 1,
	address: 'Wardrobe 1'
}
student1.occupation = 'Wizard student'
// o.address = 'Wardrobe 1'

let student2 = {
	name: 'Hermione',
	year: 1,
	address: 'Another wardrobe',
	occupation: 'Wizard student'
}

// Använd objekt för att samla olika värden, som hör ihop
// Använd listor för att samla värden av samma typ
let studentList = [student1, student2]

// console.log('Studenter:', studentList);

// Första studenten ligger på "index noll"
// let first = studentList[0]
// console.log('Först: ', first.name);

for( let index=0; index < studentList.length; index++ ) {
	let student = studentList[index]
	console.log('Student: ', student.name);
}


let numbers = [1, 2, 3, 5, 8]
console.log('Tal:', numbers);

function listSum(list) {
	let sum = 0
	for( let index=0; index < list.length; index++ ) {
		let n = list[index]
		// console.log(n);
		sum = sum + n
	}
	return sum
}

let summa = listSum(numbers)
console.log('Summan är ', summa);