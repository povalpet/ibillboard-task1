var assert, sinon;
assert = require('chai').assert;
sinon = require('sinon');
global.assert = assert;
global.spy = sinon.spy;
global.stub = sinon.stub;
