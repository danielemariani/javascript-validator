
const isArray = require('./isArray');
const isString = require('./isString');

function hasMinLength(aMinLength, aValue) {
  return (
    isStringOrArray(aValue) &&
    aValue.length >= aMinLength
  );
}

function isStringOrArray(aValue) {
  return (
    isString(aValue) ||
    isArray(aValue)
  );
}

module.exports = hasMinLength;

