// Methods
let segment = (num) => {
	let chunk = [];
	let collection = [];
	let count = num.length;
	let addToChunk = () => {
		let string = num.pop();
		let digit = parseInt(string);
		chunk.unshift(digit);
	};
	let addToCollection = () => {
		collection.unshift(chunk);
		chunk = [];
	};
	let trailingDigits = () => {
		for(let i = chunk.length; i < 3; i++){
			chunk.unshift(0);
		}
		collection.unshift(chunk);
		chunk = [];
	};
	for(let i = 0; i < count; i++){
		chunk.length === 3 ? addToCollection() + addToChunk(num) :
		num.length > 0 ? addToChunk(num) :
		trailingDigits();
	}
	trailingDigits();
	return collection;
};

module.exports = {segment};