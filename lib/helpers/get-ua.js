const { errors } = require('../utils/consts');

module.exports = (headers = {}) => {
  if (
    headers.constructor === Object &&
    headers['user-agent'] &&
    headers['user-agent'].length
  ) {
    return headers['user-agent'];
  } else if (typeof headers === 'string' && headers.length) {
    return headers;
  }

  throw new Error(errors.headers);
};
