
const isValidDate = require('./isValidDate');

function isAgeMoreThan(aMinAge, aValue) {
  return (
    isValidDate(aValue)
    && calculateAge(new Date(aValue), new Date()) >= aMinAge
  );
}

module.exports = isAgeMoreThan;

function calculateAge(aDate, today) {
  var age = today.getFullYear() - aDate.getFullYear();
  var m = today.getMonth() - aDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < aDate.getDate())) {
    age--;
  }

  return age;
}
