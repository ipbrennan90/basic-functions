import {speak, returnMe, oven, doubleRecipe} from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
const expect = chai.expect

describe("basic functions test", () => {
	beforeEach(() => {
		sinon.spy(console, 'log');
	});

	afterEach(() => {
		console.log.restore();
	});

	describe('speak', () => {
		it('should be a function', () => {
			expect(speak).to.be.a('function');
		})

		it('should log something to the console', () => {
			speak();
			expect(console.log).to.be.called;
		});
	});

	describe('returnMe', () => {
		it('should be a function', () => {
			expect(returnMe).to.be.a('function');
		});

		it('should return something', () => {
			let returnValue = returnMe(1);
			expect(returnValue).to.be.equal(1)
		});
	});

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

	describe('doubleRecipe', () => {
		it('should be a function', () => {
			expect(doubleRecipe).to.be.a('function');
		});

		it('should return double the amount of cups given to it', () => {
			const cups = 2;
			let doubleCups = doubleRecipe(cups);
			expect(doubleCups).to.be.equal(cups * 2);
		});
	})
})
