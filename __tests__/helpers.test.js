const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-08-01 16:12:03');

  expect(format_date(date)).toBe('8/1/2022');
});

test('format_plural correctly pluralizes words', () => {
  const word1 = format_plural('tiger', 1);
  const word2 = format_plural('lion', 2);

  expect(word1).toBe('tiger');
  expect(word2).toBe('lions');
});