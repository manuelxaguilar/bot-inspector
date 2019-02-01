const { crawlersList } = require('../utils/consts');
const { errors } = require('../utils/consts');

module.exports = (additionalCrawlers = []) => {
  if (
    Array.isArray(additionalCrawlers) ||
    typeof additionalCrawlers === 'string'
  ) {
    return crawlersList.concat(additionalCrawlers);
  }

  throw new TypeError(`${errors.type} Received: ${typeof additionalCrawlers}`);
};
