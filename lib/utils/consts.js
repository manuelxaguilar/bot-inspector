exports.crawlersList = [
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
  'ia_archiver',
  'twitterbot'
];

exports.errors = {
  headers: 'User agent is not provided as a "headers" property.',
  type: {
    crawlersList:
      "Parameter's type is not allowed when building the crawlers list.",
    regex: "Crawlers list must be of type array with at least one valid item in it."
  }
};
