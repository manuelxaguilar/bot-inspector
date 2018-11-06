module.exports = (additionalCrawlers = []) => {
  const crawlers = [
    'googlebot',
    'google-structured-data-testing-tool',
    'bingbot',
    'linkedinbot',
    'mediapartners-google',
    'googlebot-news',
    'slurp',
    'DuckDuckBot',
    'Baiduspider',
    'YandexBot',
    'Sogou',
    'facebot',
    'facebook',
    'ia_archiver'
  ];

  const mergedCrawlers = crawlers.concat(additionalCrawlers);

  return mergedCrawlers;
};
