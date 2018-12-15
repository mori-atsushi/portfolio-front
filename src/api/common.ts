import axios from 'axios';

const domain = 'http://localhost:8080';

export async function getRequest<T>(path: string): Promise<T> {
  return axios.request<T>({ url: `${ domain }${ path }` })
    .then((response) => response.data)
    .catch(err => {
      throw err;
    });
}
