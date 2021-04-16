const { ApiPath, HttpMethod, BooksApiPath } = require('../../common/enums');

class Post {
  constructor({ baseUrl, http }) {
    this._baseUrl = baseUrl;
    this._http = http;
  }

  findAll() {
    return this._http.load(this._getUrl(), {
      method: HttpMethod.GET,
    });
  }

  findOne(id) {
    return this._http.load(this._getUrl(`/${id}`), {
      method: HttpMethod.GET,
    });
  }

  _getUrl(path = BooksApiPath.ROOT) {
    return `${this._baseUrl}${ApiPath.POSTS}${path}`;
  }
}

module.exports = {
  Post,
};
