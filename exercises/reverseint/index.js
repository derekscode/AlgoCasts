// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let reversedString = n.toString().split('').reverse().join('');
	let answer = parseInt(reversedString);

	return answer * Math.sign(n);
}

reverseInt(0);

module.exports = reverseInt;

// function reverseInt(n) {
// 	let array = Array.from(String(n), Number);

// 	let reversedArray = array.reverse();

// 	let answer = +reversedArray.join('');

// 	return answer;
// }
