import { functionLove } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;

describe('functionLove', () => {
	beforeEach(() => {
		sinon.spy(console, 'log');
	});

	afterEach(() => {
		console.log.restore();
	});

	it('should be a function', () => {
		expect(functionLove).to.be.a('function');
	});

	it('should log something to the console', () => {
		functionLove()
		expect(console.log).to.be.called;
	})
})
