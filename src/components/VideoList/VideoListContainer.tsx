import React, { useMemo, useCallback } from 'react';
import { FlatList, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';

import Header from '../Header';
import ListFooterComponent from './ListFooterComponent';
import VideoListItem, { VideoListItemProps } from './VideoListItem';
import { useVideos } from '../../hooks/useVideos';
import { calculateNumColumns } from '../../utils/layout';

const VideoListContainer: React.FC = () => {
  const { fetchNextPage, isFetchingNextPage, items, hasNextPage } = useVideos();
  const { width } = useWindowDimensions();

  const calcNumColumns = useMemo(
    () =>
      calculateNumColumns(width, {
        width: styles.item.width,
        margin: styles.item.margin,
      }),
    [width],
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
        ListFooterComponent={
          <ListFooterComponent isLoading={isFetchingNextPage} />
        }
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
    paddingTop: Platform.OS === 'web' ? 80 : 20,
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
