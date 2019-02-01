const getUA = require('./helpers/get-ua');
const getCrawlerList = require('./helpers/get-crawler-list');
const setCrawlierListRegex = require('./helpers/set-crawler-regex');

function BotInspector({ customCrawlers = [], headers = {} }) {
  const crawlers = getCrawlerList(customCrawlers);
  const ua = getUA(headers);
  const crawlerRegex = setCrawlierListRegex(crawlers);

  const isCrawler = () => {
    let isBot;

    try {
      isBot = ua.match(crawlerRegex);
    } catch (error) {
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
