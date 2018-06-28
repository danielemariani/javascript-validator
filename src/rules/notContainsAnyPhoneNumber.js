
const CONTAINS_PHONE_REGEX = /(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/mi;

function notContainsAnyPhoneNumber(aValue) {
  return !(CONTAINS_PHONE_REGEX.test(removeReturnsCharacters(aValue)));
}

function removeReturnsCharacters(aValue) {
  return aValue.replace(/(?:\r\n|\r|\n)/g, '');
}

module.exports = notContainsAnyPhoneNumber;
