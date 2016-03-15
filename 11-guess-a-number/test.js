import chai from 'chai';
import * as app from './app.js';

var expect = chai.expect;

describe('Max Function', () => {

	it('Should pick the largest when comparing numbers', (done) => {

    expect(app.max(1, 3)).to.equal(3);
    expect(app.max(0, 3)).to.equal(3);
    expect(app.max(10, 3)).to.equal(10);
    expect(app.max(-1, -3)).to.equal(-1);

		done();
	});

  it('Should pick the number when presented with a number and a string', (done) => {
    expect(app.max('aaa', 0)).to.equal(0);
    done();
  });

  it('Should return NaN if provided with two things that aren\'t numbers', (done) => {
    expect(isNaN(app.max('aaa', 'bbb')));
    done();
  });

});

describe('Max of Three Function', () => {

	it('Should pick the largest when comparing numbers', (done) => {

    expect(app.maxOfThree(1,3,2)).to.equal(3);
    expect(app.maxOfThree(0,3,-1)).to.equal(3);
    expect(app.maxOfThree(10,3,50)).to.equal(50);
    expect(app.maxOfThree(-1,-3,-10)).to.equal(-1);
		done();
	});

  it('Should pick the largest number when presented with numbers and strings', (done) => {
    expect(app.maxOfThree('aaa',0,1)).to.equal(1);
    done();
  });

  it('Should return NaN if provided with three things that aren\'t numbers', (done) => {
    expect(isNaN(app.maxOfThree('aaa','bbb','ccc')));
    done();
  });

});

describe('isVowel Function', () => {

  it('Should return true for vowels', (done) => {

    expect(app.isVowel('a')).to.equal(true);
    expect(app.isVowel('E')).to.equal(true);
		done();
	});

  it('Should return false for consonants and numbers', (done) => {
    expect(app.isVowel('B')).to.equal(false);
    expect(app.isVowel('b')).to.equal(false);
    expect(app.isVowel(0)).to.equal(false);
		done();
	});

});

describe('Rovarspraket Function', () => {

  it('Should rovarspraket sentences', (done) => {
    expect(app.rovarspraket('a')).to.equal('a')
    expect(app.rovarspraket('b')).to.equal('bob')
    expect(app.rovarspraket('cat')).to.equal('cocatot')
    expect(app.rovarspraket('javascript')).to.equal('jojavovasoscocroripoptot')
    expect(app.rovarspraket(0)).to.equal('0')
		done();
	});

});

describe('Reverse Function', () => {

  it('Should reverse words or sentences', (done) => {
    expect(app.reverse('books')).to.equal('skoob')
    expect(app.reverse("we don't want no trouble")).to.equal("elbuort on tnaw t'nod ew")
		done();
	});

});

describe('Longest Word Function', () => {

  it('Should find the longest word', (done) => {
    expect(app.findLongestWord("book dogs")).to.equal("book")
    expect(app.findLongestWord("don't mess with Texas")).to.equal("Texas")
		done();
	});

});

describe('isPalindrome Function', () => {

  it('Should return true for palindromes', (done) => {
    expect(app.isPalindrome("tacocat")).to.equal(true);
    expect(app.isPalindrome("racecar")).to.equal(true);
		done();
	});

  it('Should return false for non-palindromes', (done) => {
    expect(app.isPalindrome("banana")).to.equal(false);
    expect(app.isPalindrome(0)).to.equal(false);
		done();
	});

});
