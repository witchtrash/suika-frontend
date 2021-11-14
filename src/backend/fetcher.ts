import ky from 'ky';

const client = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  retry: 0,
});

export const fetcher = async (input: string, init?: RequestInit) => {
  return await client.get(input).json();
};
