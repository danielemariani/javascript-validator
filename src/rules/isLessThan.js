
const isNumber = require('./isNumber');

function isLessThan(aMaxValue, aValue) {
  return (
    isNumber(aValue) &&
    aValue < aMaxValue
  );
}

module.exports = isLessThan;
