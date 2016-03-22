import chai from 'chai';
import * as app from './app.js';

var expect = chai.expect;

describe('Espresso', () => {

	it('Should replace espresso with ESPRESSO YUM YUM YUM', (done) => {

    expect(app.espresso().match(/espresso yum yum yum/ig)).to.not.be.null;
		done();
	});

});

describe('Exclamation', () => {

	it('Should replace ? with !', (done) => {
    expect(app.exclamation().indexOf('?')).to.equal(-1);
		done();
	});

});

describe('Cafe Au Lait', () => {

	it('Should replace café au lait with café-au-lait?', (done) => {

    expect(app.auLait().match(/café au lait/ig)).to.be.null;
		done();
	});

});

describe('Quadruple Double Letters', () => {

	it('Should replace doubled letters with quadrupled letters', (done) => {

    var text = app.quad();

    var myRe = /(\w)\1+/ig;
    var matches = [], t;
    while ((t = myRe.exec(text)) !== null) {
        matches = matches.concat(t)
    }
    matches = matches.filter(function(v){
        return v.length === 2
    })

    expect(matches.length).to.equal(0);
		done();
	});

});
