module.exports = (additionalCrawlers = []) => {
  const crawlers = [
    'googlebot',
    'google-structured-data-testing-tool',
    'bingbot',
    'linkedinbot',
    'mediapartners-google'
  ]

  const mergedCrawlers = crawlers.concat(additionalCrawlers)

  return mergedCrawlers
}
