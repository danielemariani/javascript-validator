
const isDefined = require('./isDefined');

function isEqualToValue(aComparisonValue, aValue) {
  return (
    isDefined(aValue) &&
    isDefined(aComparisonValue) &&
    aValue === aComparisonValue
  );
}

module.exports = isEqualToValue;

