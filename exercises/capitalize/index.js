// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	const lowerCaseWords = str.split(' ');

	let upperCaseWords = [];
	for (let word of lowerCaseWords) {
		let firstLetter = word[0].toUpperCase();
		let remainingLetters = word.slice(1);
		let upperCaseWord = firstLetter + remainingLetters;
		upperCaseWords.push(upperCaseWord);
	}

	return upperCaseWords.join(' ');
}
capitalize('a short sentence');

module.exports = capitalize;

// function capitalize(str) {
// 	let result = str[0].toUpperCase();

// 	for (let i = 1; i < str.length; i++) {
// 		if (str[i - 1] === ' ') result += str[i].toUpperCase();
// 		else result += str[i];
// 	}
// 	console.log(result);
// 	return result;
// }
