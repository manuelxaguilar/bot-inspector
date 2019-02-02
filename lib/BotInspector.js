const getUA = require('./helpers/get-ua');
const getCrawlerList = require('./helpers/get-crawler-list');
const setCrawlerListRegex = require('./helpers/set-crawler-regex');

function BotInspector({ customCrawlers = [], headers = {} } = {}) {
  let crawlers;
  let ua;
  let crawlerRegex;
  let errorMessage = null;

  try {
    crawlers = getCrawlerList(customCrawlers);
    ua = getUA(headers);
    crawlerRegex = setCrawlerListRegex(crawlers);
  } catch (error) {
    crawlers = ua = crawlerRegex = null;
    errorMessage = error;
    console.error(error);
  }

  const isCrawler = () => {
    let isBot;

    try {
      isBot = ua.match(crawlerRegex);
    } catch (error) {
      console.error(errorMessage);
      return false;
    }

    if (isBot && isBot.length) {
      return true;
    }

    return false;
  };

  return Object.freeze({
    isCrawler
  });
}

module.exports = BotInspector;
