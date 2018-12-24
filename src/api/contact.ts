import { postRequest } from 'src/api/common';

import { IFetchRequest } from 'src/modules/contact';

export async function send(request: IFetchRequest): Promise<void> {
  return postRequest<void>('/contact', request);
}
