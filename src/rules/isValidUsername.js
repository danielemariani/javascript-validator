
const isNonEmptyString = require('./isNonEmptyString');
const VALID_USERNAME_REGEX = /^[\wÀ-ÿ_-]{6,25}$/;

function isValidUsername(aValue) {
  return (
    isNonEmptyString(aValue) &&
    VALID_USERNAME_REGEX.test(aValue)
  );
}

module.exports = isValidUsername;

