import React, { useCallback, useMemo } from 'react';

import { FlatList, Platform, StyleSheet, View, useWindowDimensions } from 'react-native';

import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';

import { Video, YouTubeResponse } from '../../types/youtube';
import { calculateNumColumns } from '../../utils/layout';
import Header from '../Header';
import ListFooterComponent from './ListFooterComponent';
import VideoListItem, { VideoListItemProps } from './VideoListItem';

interface VideoListContainerProps {
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<YouTubeResponse, unknown>>;
  isFetchingNextPage: boolean;
  items: Video[];
  hasNextPage: boolean;
}

const VideoListContainer = ({
  fetchNextPage,
  isFetchingNextPage,
  items,
  hasNextPage,
}: VideoListContainerProps) => {
  const { width } = useWindowDimensions();

  const calcNumColumns = useMemo(
    () =>
      calculateNumColumns(width, {
        width: styles.item.width,
        margin: styles.item.margin,
      }),
    [width]
  );

  const handleEndReached = useCallback(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isFetchingNextPage, hasNextPage]);

  const renderItem = ({ item, index }: VideoListItemProps) => (
    <VideoListItem item={item} index={index} />
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<ListFooterComponent isLoading={isFetchingNextPage} />}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item, index) => `${index}-${item.id.videoId}`}
        numColumns={calcNumColumns}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        key={calcNumColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  listContainer: {
    paddingTop: Platform.OS === 'web' ? 80 : 30,
    paddingHorizontal: 0,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    zIndex: 1,
    marginVertical: 10,
    margin: 1,
  },
});

export default VideoListContainer;
