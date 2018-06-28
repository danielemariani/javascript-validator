
const CONTAINS_EMAIL_REGEX = /.*(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})).*/mi;

function notContainsAnyEmail(aValue) {
  return !(CONTAINS_EMAIL_REGEX.test(aValue));
}

module.exports = notContainsAnyEmail;
