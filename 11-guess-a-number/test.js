import chai from 'chai';
import * as app from './app.js';

var expect = chai.expect;

describe('generateNumber', () => {

	it('Should pick a number between 1 and 100', (done) => {

    expect(app.generateNumber()).to.be.within(1, 100);
    expect(app.generateNumber()).to.be.within(1, 100);
    expect(app.generateNumber()).to.be.within(1, 100);
    expect(app.generateNumber()).to.be.within(1, 100);
    expect(app.generateNumber()).to.be.within(1, 100);

		done();
	});

  it('Should pick a whole number', (done) => {
    var number = app.generateNumber();
    expect(number).to.be.a('number');
    expect(number % 1).to.be.equal(0);

    done();
  });

});

describe('isRightNumber', () => {

	it('Should return true if the numbers match', (done) => {

    expect(app.isRightNumber(5, 5)).to.equal(true);
    expect(app.isRightNumber(1, 1)).to.equal(true);
    expect(app.isRightNumber(100, 100)).to.equal(true);
		done();
	});

  it('Should return false if they do not match', (done) => {
    expect(app.isRightNumber(5, 4)).to.equal(false);
    expect(app.isRightNumber(1, 10)).to.equal(false);
    expect(app.isRightNumber(99, 100)).to.equal(false);

    done();
  });

});
