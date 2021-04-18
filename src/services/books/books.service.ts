import { IDataService, IRepository } from '../../common/interfaces';
import { Book, CreateBookPayload } from '../../common/types';

type Constructor = {
  booksRepository: IRepository<unknown>;
};

class Books implements IDataService<Book> {
  #booksRepository: IRepository<Book>;

  constructor({ booksRepository }: Constructor) {
    this.#booksRepository = <IRepository<Book>>booksRepository;
  }

  public findAll(): Promise<Book[]> {
    return this.#booksRepository.findAll();
  }

  public findOne(id: string): Promise<Book | null> {
    return this.#booksRepository.findOne(id);
  }

  public create(payload: CreateBookPayload): Promise<Book> {
    return this.#booksRepository.create(payload);
  }

  public update(payload: Book): Promise<Book> {
    return this.#booksRepository.update(payload);
  }

  public delete(id: string): Promise<boolean> {
    return this.#booksRepository.delete(id);
  }
}

export { Books };
