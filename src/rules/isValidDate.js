
const isDefined = require('./isDefined');

function isValidDate(aValue) {
  let date = new Date(aValue);

  return (
    isDefined(aValue) &&
    !!(aValue) &&
    (date instanceof Date) &&
    !isNaN(date.valueOf())
  );
}

module.exports = isValidDate;

