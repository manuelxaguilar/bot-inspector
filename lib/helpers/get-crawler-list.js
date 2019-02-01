const { crawlersList } = require('../utils/consts');

module.exports = (additionalCrawlers = []) => {
  if (
    Array.isArray(additionalCrawlers) ||
    typeof additionalCrawlers === 'string'
  ) {
    return crawlersList.concat(additionalCrawlers);
  }

  throw new TypeError(
    `Parameter of type "${typeof additionalCrawlers}" is not allowed when building the crawlers list.`
  );
};
