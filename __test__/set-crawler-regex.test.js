const setCrawlerRegex = require('../lib/helpers/set-crawler-regex');

test('Should throw if no value is passed as a parameter', () => {
  expect(() => {
    setCrawlerRegex();
  }).toThrow();
});

test('Should throw if an object is passed as a parameter', () => {
  expect(() => {
    setCrawlerRegex({});
  }).toThrow();
});

test('Should throw if a string is passed as a parameter', () => {
  expect(() => {
    setCrawlerRegex('googlebot');
  }).toThrow();
});

test('Should throw if an empty array is passed as a parameter', () => {
  expect(() => {
    setCrawlerRegex([]);
  }).toThrow();
});

test('Should return a regex if a valid array is passed', () => {
  expect(setCrawlerRegex(['googlebot', 'spider']).constructor === RegExp).toBe(true);
});
