// Dependencies
let segment = require('./segment').segment;
let verbalize = require('./verbalize');

// Methods
module.exports = exports = (number) => {
	let digitString = number.toString().split('');	// 1. Format input value via string methods
	let collection = segment(digitString);			// 2. Segment input value into an array of 3-digit chunks
	let sentence = verbalize(collection);			// 3. Convert each chunk of digits into words
	return sentence;
};