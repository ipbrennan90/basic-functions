import { returnMe } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;


describe('returnMe', () => {
	it('should be a function', () => {
		expect(returnMe).to.be.a('function');
	});

	it('should return something', () => {
		let returnValue = returnMe();
		expect(returnValue).to.exist
	});
});
