import { HttpMethod } from '../../common/enums/index.ts';

class Http {
  public load<T = unknown>(
    url: string,
    options: RequestInit = {
      method: HttpMethod.GET,
    },
  ): Promise<T> {
    return fetch(url, options)
      .then(this._checkStatus)
      .then((res) => this._parseJSON<T>(res))
      .catch(this._throwError);
  }

  _checkStatus(response: Response): Response | never {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response;
  }

  _parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  _throwError(err: Error): never {
    throw err;
  }
}

export { Http };
