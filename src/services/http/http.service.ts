import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';
import { HttpMethod } from '../../common/enums';

class Http {
  #http: AxiosInstance;

  constructor() {
    this.#http = axios.create({});
  }

  public load<T = unknown>(
    url: string,
    options: AxiosRequestConfig = {
      method: HttpMethod.GET,
    },
  ): Promise<T> {
    return this.#http
      .request<T>({ url, ...options })
      .then(Http.getData)
      .catch(Http.catchError);
  }

  static getData<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  static catchError(err: AxiosError<unknown>): never {
    const { response } = err;

    throw new Error(response?.statusText);
  }
}

export { Http };
