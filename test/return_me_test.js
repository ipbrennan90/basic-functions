import { returnMe } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
const expect = chai.expect;


describe('returnMe', () => {
	it('should be a function', () => {
		expect(returnMe).to.be.a('function');
	});

	it('should return something', () => {
		const returnValue = returnMe();
		expect(returnValue).to.exist
	});
});
