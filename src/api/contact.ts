import { postRequest } from 'src/api/common';
import { IContactRequest } from 'src/api/request';

export async function sendContact(request: IContactRequest): Promise<void> {
  return postRequest<void>('/contact', request);
}
