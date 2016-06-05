var should = require('chai').should(),
    expect = require('chai').expect,
    textToCodeRatio = require('../index');

describe('#textToCodeRatio', function() {

  it('returns ratio as a number', function() {
    textToCodeRatio("http://sitepoint.com",function(ratio){
      expect(ratio).to.be.a("number");
    });
  });

  it('returns ratio as a correct number', function() {
    textToCodeRatio("http://sitepoint.com",function(ratio){
      expect(ratio).to.equal(0.22388059701492538);
    });
  });

  it('catches bad urls', function() {
    var pass = false;
    try{
      textToCodeRatio("uygds",function(ratio){});
    }
    catch(e){
      pass = true;
    }
    expect(pass).to.equal(true);
  });

  it('catches missing callbacks', function() {
    var pass = false;
    try{
      textToCodeRatio("uygds");
    }
    catch(e){
      pass = true;
    }
    expect(pass).to.equal(true);
  });

});
