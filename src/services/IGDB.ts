import axios, { AxiosInstance, AxiosPromise } from 'axios';

import Environment from '../environment';

abstract class IGDB {
  private static client: AxiosInstance = axios.create({
    baseURL: 'https://api-v3.igdb.com',
    headers: {
      'user-key': Environment.variable('IGDB_KEY'),
    },
  });

  private static async axiosResponse(promise: AxiosPromise) {
    const response = await promise;
    return response.data;
  }

  public static getLastestDate(id: number): Promise<any> {
    return this.axiosResponse(
      this.client.post(
        '/release_dates',
        `fields date;
        where id = ${id};
      `),
    );
  }

  public static getCover(game: number): Promise<any> {
    return this.axiosResponse(
      this.client.post(
        '/covers',
        `fields url;
        where game = ${game};
      `),
    );
  }

  public static search(term: string): Promise<any> {
    return this.axiosResponse(
      this.client.post(
        `/games?search=${term}&fields=id,name,release_dates,platforms&limit=5`),
    );
  }
}

export default IGDB;
