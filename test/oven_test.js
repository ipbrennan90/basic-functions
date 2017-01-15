import { oven } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;

describe('oven', () => {

	it('should be a function', () => {
			expect(oven).to.be.a('function');
	});

	it('should turn on', () => {
		let ovenIs = oven('on');
		expect(ovenIs).to.be.equal('on');
	});

	it('should turn off', () => {
		let ovenIs = oven('off');
		expect(ovenIs).to.be.equal('off');
	});
});
