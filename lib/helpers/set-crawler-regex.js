module.exports = crawlers => {
  let crawlersRegExp;

  try {
    crawlersRegExp = new RegExp(crawlers.join('|').trim(), 'gi');
  } catch (error) {
    crawlersRegExp = null;
  }

  return crawlersRegExp;
};
