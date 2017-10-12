
const isNonEmptyString = require('./isNonEmptyString');
const VALID_PERSON_NAME_REGEX = /^[a-zA-ZÀ-ÿ\, \']+$/;

function isValidPersonName(aValue) {
  return (
    isNonEmptyString(aValue) &&
    VALID_PERSON_NAME_REGEX.test(aValue)
  );
}

module.exports = isValidPersonName;

