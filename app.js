// Dependencies
let prompt = require('prompt');
let read = require('./custom_modules/read-number');

// Prompt
prompt.start();
prompt.get('number', (err, res) => {
	let output = read(res.number);
	console.log('Output: ' + output);
});