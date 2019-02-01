const getUa = require('../lib/helpers/get-ua');

test('Should throw if no argument is passed', () => {
  expect(() => {
    getUa();
  }).toThrow();
});

test('Should throw if an empty string is passed as an argument', () => {
  expect(() => {
    getUa('');
  }).toThrow();
});

test('Should throw if "null" is passed as an argument', () => {
  expect(() => {
    getUa(null);
  }).toThrow();
});

test('Should throw if an array is passed as an argument', () => {
  expect(() => {
    getUa([]);
  }).toThrow();
});

test('Should throw if an empty object is passed as an argument', () => {
  expect(() => {
    getUa({});
  }).toThrow();
});

test('Should throw if an object with the "user-agent" prop is passed as an argument', () => {
  expect(() => {
    getUa({
      test: 'bot'
    });
  }).toThrow();
});

test('Should return the same string that is passed as an argument', () => {
  expect(typeof getUa('googlebot')).toBe('string');
  expect(getUa('googlebot')).toEqual('googlebot');
});

test('Should return the value of the "user-agent" passed on the object param', () => {
  expect(getUa({ 'user-agent': 'bot' })).toEqual('bot');
});
