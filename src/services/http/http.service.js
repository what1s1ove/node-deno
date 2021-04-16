const axios = require(`axios`);
const { HttpMethod } = require('../../common/enums');

class Http {
  constructor() {
    this._http = axios.create({});
  }

  _load(
    url,
    options = {
      method: HttpMethod.GET,
    },
  ) {
    return this._http
      .request({ url, ...options })
      .then(Http.getData)
      .catch(Http.catchError);
  }

  static getData(response) {
    return response.data;
  }

  static catchError(err) {
    const { response } = err;

    throw new Error(response.data.messages);
  }
}

module.exports = {
  Http,
};
