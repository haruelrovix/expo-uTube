import { useInfiniteQuery } from 'react-query';
import { fetchVideos } from '../services/youtube';

export function useVideos() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    error,
    isLoading,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['videos'],
    ({ pageParam = undefined }) => fetchVideos(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
    error,
    isLoading,
    isError,
    isFetchingNextPage,
    items: data?.pages.flatMap((page) => page.items) || [],
  };
}
