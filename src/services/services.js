const { ENV } = require('../common/enums');
const { Book } = require('./book/book.service');
const { Http } = require('./http/http.service');
const { Post } = require('./post/post.service');

const initServices = ({ repositories }) => {
  const { book: bookRepository } = repositories;

  const http = new Http();
  const book = new Book({
    bookRepository,
  });
  const post = new Post({
    baseUrl: ENV.API_URL.PLACEHOLDER_API,
    http,
  });

  return {
    book,
    http,
    post,
  };
};

module.exports = {
  initServices,
};
