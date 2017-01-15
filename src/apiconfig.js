module.exports = {
  env: 'prod',
  _apiBaseUrl: '/api/',
  _apiBaseUrlDev: 'http://localhost:3000/api/',
  apiUrl: function () {
    if (this.env === 'dev') {
      return this._apiBaseUrlDev
    }
    return this._apiBaseUrl
  }
}
