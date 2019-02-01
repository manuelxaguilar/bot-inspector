const getCrawlerList = require('../lib/helpers/get-crawler-list');
const { crawlersList } = require('../lib/utils/consts');

test('Should return an array when no param is passed', () => {
  expect(Array.isArray(getCrawlerList())).toBe(true);
});

test('Should return an array when an array is passed as param', () => {
  expect(Array.isArray(getCrawlerList([]))).toBe(true);
});

test('Should return an array when a string is passed as param', () => {
  expect(Array.isArray(getCrawlerList('bot'))).toBe(true);
});

test('Should return the default crawlers list if no param is passed', () => {
  expect(getCrawlerList()).toEqual(crawlersList);
});

test('Should return the default crawlers list if an empty array is passed', () => {
  expect(getCrawlerList([])).toEqual(crawlersList);
});

test('Should return a modified crawlers list if an array is passed', () => {
  const customCrawlersArray = ['bot', 'spider'];
  expect(getCrawlerList(customCrawlersArray)).toEqual([
    ...crawlersList,
    ...customCrawlersArray
  ]);
});

test('Should return a modified crawlers list if a string is passed', () => {
  const customCrawlersString = 'bot';
  expect(getCrawlerList(customCrawlersString)).toEqual([
    ...crawlersList,
    customCrawlersString
  ]);
});

test('Should fail if a type other than array or string are sent as parameters', () => {
  expect(() => {
    getCrawlerList(123);
  }).toThrow(TypeError);

  expect(() => {
    getCrawlerList({ test: 'should fail' });
  }).toThrow(TypeError);

  expect(() => {
    getCrawlerList(true);
  }).toThrow(TypeError);
});
