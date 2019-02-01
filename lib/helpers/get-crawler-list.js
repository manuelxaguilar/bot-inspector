const { crawlersList } = require('../utils/consts');

module.exports = (additionalCrawlers = []) => {
  const mergedCrawlers = crawlersList.concat(additionalCrawlers);

  return mergedCrawlers;
};
