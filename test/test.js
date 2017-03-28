// Dependencies
let assert = require('assert');
let read = require('../custom_modules/read-number');
let segment = require('../custom_modules/segment').segment;
let verbalize = require('../custom_modules/verbalize');

// Tests
describe('App', ()=> {
	describe('#segment()', () => {
		it('Should return: 0,0,1,2,3,4', () => {
			let testValue = ['1','2','3','4'];
			assert.equal('0,0,1,2,3,4', segment(testValue).toString());
		});
	});
	describe('#verbalize()', () => {
		it('Should return: one thousand two hundred thirty four', () => {
			let testValue = [[0,0,1],[2,3,4]];
			assert.equal('one thousand two hundred thirty four  ', verbalize(testValue));
		});
	});
	describe('#readNumber()', () => {
		it('Should return: one thousand two hundred thirty four', () => {
			let testValue = 1234;
			assert.equal('one thousand two hundred thirty four  ', read(testValue));
		});
	});
});