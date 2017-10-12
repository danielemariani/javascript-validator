
const isString = require('./isString');

function isNonEmptyString(aValue) {
  return (
    isString(aValue) &&
    aValue.length > 0
  );
}

module.exports = isNonEmptyString;

