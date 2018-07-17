
function matches(aRule, aValue) {
  return new RegExp(aRule).test(aValue);
}

module.exports = matches;
