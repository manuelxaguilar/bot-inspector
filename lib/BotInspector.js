const getUA = require('./helpers/get-ua');
const getCrawlerList = require('./helpers/get-crawler-list');
const setCrawlierListRegex = require('./helpers/set-crawler-regex');

function BotInspector({ customCrawlers = [], headers = {} }) {
  let crawlers;
  let ua;
  let crawlerRegex;
  let errorMessage = null;

  try {
    crawlers = getCrawlerList(customCrawlers);
    ua = getUA(headers);
    crawlerRegex = setCrawlierListRegex(crawlers);
  } catch (error) {
    console.error(error);
    crawlers = ua = crawlerRegex = null;
    errorMessage = error;
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
