import ky from 'ky';

export const fetcher = async (input: string, init?: RequestInit) => {
  return await ky(input, {
    prefixUrl: process.env.NEXT_PUBLIC_API_URL,
    retry: 0,
    ...init,
  });
};
