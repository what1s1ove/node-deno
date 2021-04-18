import { ApiPath, HttpMethod, BooksApiPath } from '../../common/enums/index.ts';
import { IRepository } from '../../common/interfaces/index.ts';
import { Post } from '../../common/types/index.ts';
import { Http } from '../http/http.service.ts';

type Constructor = {
  baseUrl: string;
  http: Http;
};

class Posts implements Partial<IRepository<Post>> {
  #baseUrl: string;

  #http: Http;

  constructor({ baseUrl, http }: Constructor) {
    this.#baseUrl = baseUrl;
    this.#http = http;
  }

  public findAll(): Promise<Post[]> {
    return this.#http.load<Post[]>(this._getUrl(), {
      method: HttpMethod.GET,
    });
  }

  public findOne(id: string): Promise<Post> {
    return this.#http.load<Post>(this._getUrl(`/${id}`), {
      method: HttpMethod.GET,
    });
  }

  private _getUrl(path: string = BooksApiPath.ROOT) {
    return `${this.#baseUrl}${ApiPath.POSTS}${path}`;
  }
}

export { Posts };
