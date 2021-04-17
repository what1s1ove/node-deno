class Book {
  constructor({ bookRepository }) {
    this._bookRepository = bookRepository;
  }

  findAll() {
    return this._bookRepository.findAll();
  }

  findOne(id) {
    return this._bookRepository.findOne(id);
  }

  create(payload) {
    return this._bookRepository.create(payload);
  }

  update(payload) {
    return this._bookRepository.update(payload);
  }

  delete(id) {
    return this._bookRepository.delete(id);
  }
}

module.exports = {
  Book,
};
