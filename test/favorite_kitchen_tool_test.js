import { favoriteKitchenTool } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
const expect = chai.expect;


describe('favoriteKitchenTool', () => {
	it('should be a function', () => {
		expect(favoriteKitchenTool).to.be.a('function');
	});

	it('should return something', () => {
		const returnValue = favoriteKitchenTool();
		expect(returnValue).to.exist
	});
});
