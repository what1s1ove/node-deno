const path = require('path');
const { readFile, writeFile } = require('../../helpers');
const {
  getBookById,
  getNewBook,
  updateBook,
  removeBook,
} = require('./helpers');

const booksDataPath = path.resolve(__dirname, './books.json');

class Book {
  findAll() {
    return this._getBooks();
  }

  async findOne(id) {
    const books = await this._getBooks();

    return getBookById(books, id);
  }

  async create(payload) {
    const newBook = getNewBook(payload);
    const books = await this._getBooks();

    await this._saveBooks(books.concat(newBook));

    return newBook;
  }

  async update(payload) {
    const books = await this._getBooks();
    const updatedBooks = updateBook(books, payload);

    await this._saveBooks(updatedBooks);

    return payload;
  }

  async delete(id) {
    const books = await this._getBooks();
    const updatedBooks = removeBook(books, id);
    const isDeleted = books.length > updatedBooks.length;

    if (isDeleted) {
      await this._saveBooks(updatedBooks);
    }

    return isDeleted;
  }

  async _getBooks() {
    const books = await readFile(booksDataPath);

    return JSON.parse(books);
  }

  _saveBooks(books) {
    return writeFile(booksDataPath, JSON.stringify(books));
  }
}

module.exports = {
  Book,
};
