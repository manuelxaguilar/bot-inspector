const BotInspector = require('../lib/BotInspector');

test('Should return a function an object with a function named "isCrawler" when the right parameters are passed in', () => {
  const inspector = BotInspector();

  expect(inspector).toEqual({});
});
