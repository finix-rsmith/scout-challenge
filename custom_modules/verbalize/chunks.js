// Dependencies
let words = require('./words');

// Methods
let readChunk = (chunk, index) => {
	let sentence = '';
	let total = 0;
	for(let i = 0; i < chunk.length; i++){
		let digit = chunk[i];
		let digit1 = chunk[1];
		let digit2 = chunk[2];
		total += chunk[i];
		digit === 0 || digit1 === 1 && i === 2 ? sentence += '' :
		i === 0 ? sentence += words.C[digit] + ' hundred ' :
		i === 1 && digit != 1 ? sentence += words.X[digit] + ' ' :
		i === 1 && digit === 1 ? sentence += words.V[digit2] + ' ' :
		sentence += words.I[digit] + ' ';
	}
	total === 0 ? sentence += '' : sentence += defineChunk(index) + ' ';
	return sentence;
};
let defineChunk = (index) => {
	return words.M[index];
};

// Exports
module.exports = {readChunk};