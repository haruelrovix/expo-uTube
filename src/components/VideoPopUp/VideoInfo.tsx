import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { format } from 'date-fns';

interface VideoInfoProps {
  title: string;
  channelTitle: string;
  publishedAt: string;
  closeMenu: () => void;
  showHoverInfo: () => void;
}

const VideoInfo = ({
  title,
  channelTitle,
  publishedAt,
  closeMenu,
  showHoverInfo,
}: VideoInfoProps) => (
  <Pressable
    style={styles.infoContainer}
    onPress={closeMenu}
    onHoverIn={showHoverInfo}
  >
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
    <Text style={styles.channel}>1 {channelTitle}</Text>
    <Text style={styles.date}>
      {format(new Date(publishedAt), 'MM/dd/yyyy')}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
    zIndex: 3,
    position: 'absolute',
    top: 250,
    marginRight: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  channel: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default VideoInfo;
