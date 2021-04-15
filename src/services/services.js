const { Book } = require('./book/book.service');

const initServices = () => {
  const book = new Book();

  return {
    book,
  };
};

module.exports = {
  initServices,
};
