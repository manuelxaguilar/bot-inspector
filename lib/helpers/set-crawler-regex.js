const { errors } = require('../utils/consts');

module.exports = crawlers => {
  let crawlersRegExp;

  if (Array.isArray(crawlers) && crawlers.length) {
    try {
      crawlersRegExp = new RegExp(crawlers.join('|').trim(), 'gi');
    } catch (error) {
      crawlersRegExp = null;
    }

    return crawlersRegExp;
  }

  throw new TypeError(errors.type.regex);
};
