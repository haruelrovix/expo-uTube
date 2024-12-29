import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Video } from '../../types/youtube';
import VideoCard from '../VideoCard';

export interface VideoListItemProps {
  item: Video;
  index: number;
}

const VideoListItem = ({ item, index }: VideoListItemProps) => {
  return (
    <View style={styles.item} key={`${index}-${item.id.videoId}`}>
      <VideoCard video={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    zIndex: 1,
    marginVertical: 10,
    margin: 1,
  },
});

export default VideoListItem;
