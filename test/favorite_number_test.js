import { favoriteNumber } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
const expect = chai.expect;


describe('favoriteNumber', () => {
	it('should be a function', () => {
		expect(favoriteNumber).to.be.a('function');
	});

	it('should return something', () => {
		const returnValue = favoriteNumber();
		expect(returnValue).to.exist
	});
});
