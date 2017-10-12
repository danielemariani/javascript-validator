
const isNonEmptyString = require('./isNonEmptyString');
const VALID_PASSWORD_REGEX = /^(?=.*?[0-9#?!@$%^&*\-_]).{6,}$/;

function isValidPassword(aValue) {
  return (
    isNonEmptyString(aValue) &&
    VALID_PASSWORD_REGEX.test(aValue)
  );
}

module.exports = isValidPassword;

