module.exports = crawlers => new RegExp(crawlers.join('|').trim(), 'g')
