module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/fl_app/record-selector'
    : '/'
}