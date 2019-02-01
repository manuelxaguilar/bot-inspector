const getUA = require('./helpers/get-ua');
const getCrawlerList = require('./helpers/get-crawler-list');
const setCrawlierListRegex = require('./helpers/set-crawler-regex');

class BotInspector {
  constructor({ customCrawlers = [], headers = {} }) {
    const crawlers = getCrawlerList(customCrawlers);

    this.ua = getUA(headers);
    this.crawlerRegex = setCrawlierListRegex(crawlers);
  }

  isCrawler () {
    let isBot;

    try {
      isBot = this.ua.match(this.crawlerRegex);
    } catch (error) {
      return false;
    }

    if (isBot && isBot.length) {
      return true;
    }

    return false;
  }
}

module.exports = BotInspector;
