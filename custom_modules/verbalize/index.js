// Dependencies
let chunk = require('./chunks');

// Methods
module.exports = exports = (num) => {
	let sentence = '';
	let count = num.length;
	for(let i = 0; i < count; i++){
		let setIndex = num[i];
		sentence += chunk.readChunk(setIndex, count - i - 1);
	}
	return sentence;
};