import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useInstagram() {
  const { data, error } = useSWR(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_BASIC_DISPLAY_USER_TOKEN}`,
    fetcher
  );
  return {
    posts: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}
