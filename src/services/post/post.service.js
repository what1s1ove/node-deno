const { ApiPath, HttpMethod } = require('../../common/enums');

class Post {
  constructor({ http }) {
    this._http = http;
  }

  findAll() {
    return this._http.load(this._getUrl(), {
      method: HttpMethod.GET,
    });
  }

  findOne(id) {
    return this._http.load(this._getUrl(id), {
      method: HttpMethod.GET,
    });
  }

  _getUrl(path = '') {
    return `${ApiPath.POSTS}${path}`;
  }
}

module.exports = {
  Post,
};
