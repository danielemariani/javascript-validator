
const isArray = require('./isArray');
const isNumber = require('./isNumber');
const isString = require('./isString');
const isBoolean = require('./isBoolean');
const isTrue = require('./isTrue');
const isDefined = require('./isDefined');
const hasMaxLength = require('./hasMaxLength');
const isNonEmptyString = require('./isNonEmptyString');
const hasMinLength = require('./hasMinLength');
const isEqualToValue = require('./isEqualToValue');
const isValidDate = require('./isValidDate');
const isValidEmail = require('./isValidEmail');
const isValidPassword = require('./isValidPassword');
const isValidPersonName = require('./isValidPersonName');
const isValidUrl = require('./isValidUrl');
const isValidUsername = require('./isValidUsername');
const notContainsAnyEmail = require('./notContainsAnyEmail');
const notContainsAnyWebAddress = require('./notContainsAnyWebAddress');
const notContainsAnyPhoneNumber = require('./notContainsAnyPhoneNumber');
const isAgeMoreThan = require('./isAgeMoreThan');
const matches = require('./matches');

module.exports = {
  isArray,
  isNumber,
  isString,
  isBoolean,
  isDefined,
  isTrue,
  hasMaxLength,
  hasMinLength,
  isNonEmptyString,
  isEqualToValue,
  isValidDate,
  isValidUrl,
  isValidEmail,
  isValidPassword,
  isValidUsername,
  isValidPersonName,
  notContainsAnyEmail,
  notContainsAnyPhoneNumber,
  notContainsAnyWebAddress,
  isAgeMoreThan,
  matches
};
