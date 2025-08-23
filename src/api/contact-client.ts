import { config } from '../config';

export interface ContactFormData {
  name: string | null;
  email: string | null;
  message: string | null;
}

export async function sendContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch(`${config.apiUrl}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('送信に失敗しました');
  }
}