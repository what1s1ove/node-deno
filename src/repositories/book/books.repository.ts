import path from 'path';
import { readFile, writeFile } from '../../helpers';
import { Book, CreateBookPayload } from '../../common/types';
import { IRepository } from '../../common/interfaces';
import { getBookById, getNewBook, updateBook, removeBook } from './helpers';

const booksDataPath = path.resolve(__dirname, './books.json');

class Books implements IRepository<Book> {
  findAll(): Promise<Book[]> {
    return this._getBooks();
  }

  public async findOne(id: string): Promise<Book | null> {
    const books = await this._getBooks();

    return getBookById(books, id);
  }

  public async create(payload: CreateBookPayload): Promise<Book> {
    const newBook = getNewBook(payload);
    const books = await this._getBooks();

    await this._saveBooks(books.concat(newBook));

    return newBook;
  }

  public async update(payload: Book): Promise<Book> {
    const books = await this._getBooks();
    const updatedBooks = updateBook(books, payload);

    await this._saveBooks(updatedBooks);

    return payload;
  }

  public async delete(id: string): Promise<boolean> {
    const books = await this._getBooks();
    const updatedBooks = removeBook(books, id);
    const isDeleted = books.length > updatedBooks.length;

    if (isDeleted) {
      await this._saveBooks(updatedBooks);
    }

    return isDeleted;
  }

  private async _getBooks(): Promise<Book[]> {
    const books = await readFile(booksDataPath);

    return JSON.parse(books.toString());
  }

  private _saveBooks(books: Book[]): Promise<void> {
    return writeFile(booksDataPath, JSON.stringify(books));
  }
}

export { Books };
