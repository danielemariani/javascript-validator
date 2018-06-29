
function startsWith(aStringToStart, aValue) {
  return (
    Boolean(aStringToStart)
    && aValue.indexOf(aStringToStart) === 0
  );
}

module.exports = startsWith;
