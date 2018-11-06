module.exports = headers => {
  if (headers !== null && headers.constructor === Object) {
    return headers['user-agent']
  } else if (typeof headers === 'string') {
    return headers
  }

  return null
}
