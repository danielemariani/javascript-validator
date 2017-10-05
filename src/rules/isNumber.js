
function isNumber(aValue) {
  return (
    typeof aValue === 'number' &&
    !(Number.isNaN(aValue))
  );
}

module.exports = isNumber;

