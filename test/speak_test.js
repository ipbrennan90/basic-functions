import { speak } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;


describe('speak', () => {
	beforeEach(() => {
		sinon.spy(console, 'log');
	})

	afterEach(() => {
		console.log.restore();
	});

	it('should be a function', () => {
		expect(speak).to.be.a('function');
	})

	it('should log something to the console', () => {
		speak();
		expect(console.log).to.be.called;
	});
});
