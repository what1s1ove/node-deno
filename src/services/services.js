const { Book } = require('./book/book.service');
const { Http } = require('./http/http.service');

const initServices = () => {
  const http = new Http();
  const book = new Book();

  return {
    book,
    http,
  };
};

module.exports = {
  initServices,
};
