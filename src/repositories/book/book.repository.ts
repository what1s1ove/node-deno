import path from 'path';
import { readFile, writeFile } from '../../helpers';
import { Book as BookType, CreateBookPayload } from '../../common/types';
import { getBookById, getNewBook, updateBook, removeBook } from './helpers';

const booksDataPath = path.resolve(__dirname, './books.json');

class Book {
  findAll(): Promise<BookType[]> {
    return this._getBooks();
  }

  async findOne(id: string): Promise<BookType | null> {
    const books = await this._getBooks();

    return getBookById(books, id);
  }

  async create(payload: CreateBookPayload): Promise<BookType> {
    const newBook = getNewBook(payload);
    const books = await this._getBooks();

    await this._saveBooks(books.concat(newBook));

    return newBook;
  }

  async update(payload: BookType): Promise<BookType> {
    const books = await this._getBooks();
    const updatedBooks = updateBook(books, payload);

    await this._saveBooks(updatedBooks);

    return payload;
  }

  async delete(id: string): Promise<boolean> {
    const books = await this._getBooks();
    const updatedBooks = removeBook(books, id);
    const isDeleted = books.length > updatedBooks.length;

    if (isDeleted) {
      await this._saveBooks(updatedBooks);
    }

    return isDeleted;
  }

  async _getBooks(): Promise<BookType[]> {
    const books = await readFile(booksDataPath);

    return JSON.parse(books.toString());
  }

  _saveBooks(books: BookType[]): Promise<void> {
    return writeFile(booksDataPath, JSON.stringify(books));
  }
}

export { Book };
