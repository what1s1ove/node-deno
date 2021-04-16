const { Book } = require('./book/book.service');
const { Http } = require('./http/http.service');
const { Post } = require('./post/post.service');

const initServices = () => {
  const http = new Http();
  const book = new Book();
  const post = new Post({
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
