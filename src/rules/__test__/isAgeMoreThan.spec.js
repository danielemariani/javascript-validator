
const isAgeMoreThan = require('../isAgeMoreThan');

describe('isAgeMoreThan', () => {
  describe('should pass', () => {
    it('if the provided date is enough years in the past', () => {
      expect(isAgeMoreThan(10, dateYearsInPast(10))).toBe(true);
      expect(isAgeMoreThan(4, dateYearsInPast(5))).toBe(true);
      expect(isAgeMoreThan(1, dateYearsInPast(1))).toBe(true);
    });
  });

  describe('should NOT pass', () => {
    it('if the provided date is NOT enough years in the past', () => {
      expect(isAgeMoreThan(11, dateYearsInPast(10))).toBe(false);
      expect(isAgeMoreThan(2, dateYearsInPast(1))).toBe(false);
      expect(isAgeMoreThan(1, datePlusDays(1, dateYearsInPast(1)))).toBe(false);
    });
  });
});

function dateYearsInPast(aNumOfYears, aDate) {
  const date = aDate || new Date();
  date.setFullYear(new Date().getFullYear() - aNumOfYears);
  return date;
}

function datePlusDays(aNumOfDays, aDate) {
  const date = aDate || new Date();
  date.setDate(new Date().getDate() + aNumOfDays);
  return date;
}
