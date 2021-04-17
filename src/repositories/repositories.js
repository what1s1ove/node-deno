const { Book } = require('./book/book.repository');

const initRepositories = () => {
  const book = new Book();

  return {
    book,
  };
};

module.exports = {
  initRepositories,
};
