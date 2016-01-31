var expect = require('chai').expect;
var unzip = require('./index.js');

describe('Tests for reversing zipping array', function () {
  it('It should get back an unzipped array of numbers', function () {
    expect(unzip([[1, 2], [8, 33], [4, 9]]))
      .to.eql([[1, 8, 4], [2, 33, 9]]);
  });

  it('It should get back an unzipped array', function () {
    expect(unzip([[1, 'a', 'k'], [8, 33, 'z'], [4, 9, 'name']]))
      .to.eql([[1, 8, 4], ['a', 33, 9], ['k', 'z', 'name']]);
  });
});
