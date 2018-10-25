
const isNumber = require('./isNumber');

function isMoreThan(aMinValue, aValue) {
  return (
    isNumber(aValue) &&
    aValue > aMinValue
  );
}

module.exports = isMoreThan;
