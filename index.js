const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
  }

  return namedFunction;
}

function returnsAnAnonymousFunction() {
    const anonymousFunction = function () {
    };
  
    return anonymousFunction;
  };
  
