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

  throw new Error('User agent is not provided as a "headers" property.');
};
