
const hasMaxLength = require('./hasMaxLength');
const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isValidEmail(aValue) {
  return (
    VALID_EMAIL_REGEX.test(aValue) &&
    hasMaxLength(256, aValue)
  );
}

module.exports = isValidEmail;

