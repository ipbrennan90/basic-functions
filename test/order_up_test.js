import { orderUp } from '../basic_functions.js';
import chai from 'chai';
import mocha from 'mocha';
const expect = chai.expect;

describe('orderUp', () => {
	it('should be a function', () => {
		expect(orderUp).to.be.a('function');
	});

	it('should return double the amount of cups given to it', () => {
		const order = "one cheeseburger" ;
		const orderReturn = orderUp(order);
		expect(orderReturn).to.be.equal("one cheeseburger");
	});
})
