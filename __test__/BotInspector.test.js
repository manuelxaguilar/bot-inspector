const BotInspector = require('../lib/BotInspector');

// TODO:
// add a specific suite for passing tests
// with a before to set up the BotInspector arg obj

// add a specific suite for failing tests
// with a before to set up the BotInspector arg obj

test('Should return a function an object with a function named "isCrawler" when the right parameters are passed in', () => {
  const responseObject = {
    isCrawler: expect.any(Function)
  };

  const inspector = BotInspector({
    customCrawlers: ['bot'],
    headers: {
      'user-agent': 'googlebot'
    }
  });

  expect(inspector).toMatchObject(responseObject);
});

test('Should call console.error once if incorrect arguments are passed in', () => {
  const spy = jest.spyOn(global.console, 'error');

  console.log('***Expected error***');
  BotInspector({
    customCrawlers: true
  });

  expect(spy).toHaveBeenCalledTimes(1);
});

test('Should call console.error twice if incorrect arguments are passed in and isCrawler is called', () => {
  console.error.mockClear();

  const spy = jest.spyOn(global.console, 'error');
  console.log('***Expected error***');
  const inspector = BotInspector({
    customCrawlers: true
  });

  console.log('***Expected error***');
  inspector.isCrawler();

  expect(spy).toHaveBeenCalledTimes(2);
});

test('Should return "true" when "isCrawler" is called after instantiating BotInspector with the correct parameters and the "user-agent" is a bot', () => {
  const inspector = BotInspector({
    customCrawlers: ['bot'],
    headers: {
      'user-agent': 'googlebot'
    }
  });

  expect(inspector.isCrawler()).toEqual(true);
});

test('Should return "false" when "isCrawler" is called after instantiating BotInspector with the correct parameters and the "user-agent" is not a bot', () => {
  const inspector = BotInspector({
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0)'
    }
  });

  expect(inspector.isCrawler()).toEqual(false);
});
