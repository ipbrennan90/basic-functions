import { doubleRecipe } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
const expect = chai.expect;

describe('doubleRecipe', () => {
	it('should be a function', () => {
		expect(doubleRecipe).to.be.a('function');
	});

	it('should return double the amount of cups given to it', () => {
		const cups = 2;
		const doubleCups = doubleRecipe(cups);
		expect(doubleCups).to.be.equal(4);
	});
})
