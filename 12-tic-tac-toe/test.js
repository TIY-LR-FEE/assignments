import chai from 'chai';
import * as app from './app.js';

var expect = chai.expect;

describe('emptySpotsLeft', () => {

  it('Should return true if there are spots left', (done) => {
    expect(app.emptySpotsLeft([[' ', 'O', 'O'],['O', 'O', 'O'],['O', 'O', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', ' ', 'O'],['O', 'O', 'O'],['O', 'O', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', 'O', ' '],['O', 'O', 'O'],['O', 'O', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', 'O', 'O'],[' ', 'O', 'O'],['O', 'O', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', 'O', 'O'],['O', ' ', 'O'],['O', 'O', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', 'O', 'O'],['O', 'O', ' '],['O', 'O', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', 'O', 'O'],['O', 'O', 'O'],[' ', 'O', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', 'O', 'O'],['O', 'O', 'O'],['O', ' ', 'O']])).to.equal(true);
    expect(app.emptySpotsLeft([['O', 'O', 'O'],['O', 'O', 'O'],['O', 'O', ' ']])).to.equal(true);
		done();
	});

  it('Should return false if there are no spots left', (done) => {
    expect(app.emptySpotsLeft([['O', 'O', 'O'],['O', 'O', 'O'],['O', 'O', 'O']])).to.equal(false);
		done();
	});

});

describe('validateMove', () => {

  it('Should return true if spot is open', (done) => {
    expect(app.validateMove([[' ', 'O', 'O'],['O', 'O', 'O'],['O', 'O', 'O']], { row: 1, column: 1 })).to.equal(true);
    expect(app.validateMove([['O', ' ', 'O'],['O', 'O', 'O'],['O', 'O', 'O']], { row: 1, column: 2 })).to.equal(true);
    expect(app.validateMove([['O', 'O', ' '],['O', 'O', 'O'],['O', 'O', 'O']], { row: 1, column: 3 })).to.equal(true);
    expect(app.validateMove([['O', 'O', 'O'],[' ', 'O', 'O'],['O', 'O', 'O']], { row: 2, column: 1 })).to.equal(true);
    expect(app.validateMove([['O', 'O', 'O'],['O', ' ', 'O'],['O', 'O', 'O']], { row: 2, column: 2 })).to.equal(true);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', ' '],['O', 'O', 'O']], { row: 2, column: 3 })).to.equal(true);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', 'O'],[' ', 'O', 'O']], { row: 3, column: 1 })).to.equal(true);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', 'O'],['O', ' ', 'O']], { row: 3, column: 2 })).to.equal(true);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', 'O'],['O', 'O', ' ']], { row: 3, column: 3 })).to.equal(true);
		done();
	});

  it('Should return false if spot is not open', (done) => {
    expect(app.validateMove([[' ', 'O', 'O'],['O', 'O', 'O'],['O', 'O', 'O']], { row: 1, column: 2 })).to.equal(false);
    expect(app.validateMove([['O', ' ', 'O'],['O', 'O', 'O'],['O', 'O', 'O']], { row: 1, column: 3 })).to.equal(false);
    expect(app.validateMove([['O', 'O', ' '],['O', 'O', 'O'],['O', 'O', 'O']], { row: 1, column: 1 })).to.equal(false);
    expect(app.validateMove([['O', 'O', 'O'],[' ', 'O', 'O'],['O', 'O', 'O']], { row: 2, column: 2 })).to.equal(false);
    expect(app.validateMove([['O', 'O', 'O'],['O', ' ', 'O'],['O', 'O', 'O']], { row: 2, column: 3 })).to.equal(false);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', ' '],['O', 'O', 'O']], { row: 2, column: 1 })).to.equal(false);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', 'O'],[' ', 'O', 'O']], { row: 3, column: 2 })).to.equal(false);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', 'O'],['O', ' ', 'O']], { row: 3, column: 3 })).to.equal(false);
    expect(app.validateMove([['O', 'O', 'O'],['O', 'O', 'O'],['O', 'O', ' ']], { row: 3, column: 1 })).to.equal(false);
		done();
	});

});

describe('isGameWon', () => {

  it('Should return X/O if game is won horizontally', (done) => {
    expect(app.isGameWon([['X', 'X', 'X'],[' ', ' ', ' '],[' ', ' ', ' ']])).to.equal('X');
    expect(app.isGameWon([[' ', ' ', ' '],['X', 'X', 'X'],[' ', ' ', ' ']])).to.equal('X');
    expect(app.isGameWon([[' ', ' ', ' '],[' ', ' ', ' '],['X', 'X', 'X']])).to.equal('X');
    expect(app.isGameWon([['O', 'O', 'O'],[' ', ' ', ' '],[' ', ' ', ' ']])).to.equal('O');
    expect(app.isGameWon([[' ', ' ', ' '],['O', 'O', 'O'],[' ', ' ', ' ']])).to.equal('O');
    expect(app.isGameWon([[' ', ' ', ' '],[' ', ' ', ' '],['O', 'O', 'O']])).to.equal('O');
		done();
	});

  it('Should return X/O if game is won vertically', (done) => {
    expect(app.isGameWon([['X', ' ', ' '],['X', ' ', ' '],['X', ' ', ' ']])).to.equal('X');
    expect(app.isGameWon([[' ', 'X', ' '],[' ', 'X', ' '],[' ', 'X', ' ']])).to.equal('X');
    expect(app.isGameWon([[' ', ' ', 'X'],[' ', ' ', 'X'],[' ', ' ', 'X']])).to.equal('X');
    expect(app.isGameWon([['O', ' ', ' '],['O', ' ', ' '],['O', ' ', ' ']])).to.equal('O');
    expect(app.isGameWon([[' ', 'O', ' '],[' ', 'O', ' '],[' ', 'O', ' ']])).to.equal('O');
    expect(app.isGameWon([[' ', ' ', 'O'],[' ', ' ', 'O'],[' ', ' ', 'O']])).to.equal('O');
		done();
	});

  it('Should return X/O if game is won diagonally', (done) => {
    expect(app.isGameWon([['X', ' ', ' '],[' ', 'X', ' '],[' ', ' ', 'X']])).to.equal('X');
    expect(app.isGameWon([[' ', ' ', 'X'],[' ', 'X', ' '],['X', ' ', ' ']])).to.equal('X');
    expect(app.isGameWon([['O', ' ', ' '],[' ', 'O', ' '],[' ', ' ', 'O']])).to.equal('O');
    expect(app.isGameWon([[' ', ' ', 'O'],[' ', 'O', ' '],['O', ' ', ' ']])).to.equal('O');
		done();
	});


});
