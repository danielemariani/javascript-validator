
const CONTAINS_WEB_ADDRESS_REGEX = /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([/]?[^s?]*[/]{1})*(?:\/?([^\s\n?[\]{}#]*(?:(?=\.)){1}|[^\s\n?[\]{}.#]*)?([.]{1}[^\s?#]*)?)?(?:\?{1}([^\s\n#[\]]*))?([#][^\s\n]*)?\)?/;

function notContainsAnyWebAddress(aValue) {
  return !(CONTAINS_WEB_ADDRESS_REGEX.test(aValue));
}

module.exports = notContainsAnyWebAddress;
