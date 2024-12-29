import React, { useEffect, useRef, useState } from 'react';

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { format } from 'date-fns';

import { Video } from '../../types/youtube';
import VideoPopUp from '../VideoPopUp';
import VideoMenu from '../VideoPopUp/VideoMenu';
import HoverInfo from './HoverInfo';

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [hoverImage, setHoverImage] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);
  const [hoverDuration, setHoverDuration] = useState(false);
  const [hoverDetail, setHoverDetail] = useState(false);
  const [hoverToPlay, setHoverToPlay] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hoverDurationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleHoverIn = () => {
    setHoverImage(true);
    setHoverDetail(true);
    setHoverToPlay(true);

    hoverTimerRef.current = setTimeout(() => {
      setHoverInfo(true);
    }, 1500);

    hoverDurationTimerRef.current = setTimeout(() => {
      setHoverDuration(true);
    }, 1500);
  };

  const handleHoverOut = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    if (hoverDurationTimerRef.current) {
      clearTimeout(hoverDurationTimerRef.current);
    }

    setHoverImage(false);
    setHoverInfo(false);
    setHoverDuration(false);
    setHoverDetail(false);
    setMenuVisible(false);
    setHoverToPlay(false);
  };

  const handleAddToQueue = () => {
    console.log('Added to queue:', video.snippet.title);
    setMenuVisible(false);
  };

  const handleShare = () => {
    console.log('Share:', video.snippet.title);
    setMenuVisible(false);
  };

  const showHoverDetail = () => setHoverDetail(true);
  const closeHoverDetail = () => setHoverDetail(false);
  const closeMenu = () => setMenuVisible(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
      if (hoverDurationTimerRef.current) {
        clearTimeout(hoverDurationTimerRef.current);
      }
    };
  }, []);

  const imageSource = { uri: video.snippet.thumbnails.medium.url };
  const publishedAt = format(new Date(video.snippet.publishedAt), 'MM/dd/yyyy');

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.thumbnailContainer}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
      >
        <Image style={styles.thumbnail} source={imageSource} />
      </Pressable>

      <Pressable
        style={styles.info}
        onHoverIn={showHoverDetail}
        onHoverOut={closeHoverDetail}
        onPress={closeMenu}
      >
        <HoverInfo isInfoHovered={hoverToPlay} handleHoverIn={handleHoverIn} />
        <Text style={styles.title} numberOfLines={2}>
          {video.snippet.title}
        </Text>
        <Text style={styles.channel}>{video.snippet.channelTitle}</Text>
        <Text style={styles.date}>{publishedAt}</Text>

        <VideoMenu
          isAvailable={!(!hoverImage && !hoverDetail)}
          isMenuVisible={menuVisible}
          onToggle={toggleMenu}
          onAddToQueue={handleAddToQueue}
          onShare={handleShare}
        />
      </Pressable>
      {((hoverImage && hoverDuration && hoverInfo) || hoverInfo) && (
        <VideoPopUp
          isHovered={!!hoverImage}
          isInfoVisible={hoverInfo}
          video={video}
          setHoverInfo={setHoverInfo}
          setHoverImage={setHoverImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
    overflow: 'visible',
    width: 320,
    height: 270,
    rowGap: 20,
    columnGap: 20,
    marginVertical: 20,
    zIndex: 2,
  },
  thumbnailContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 320,
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    padding: 10,
    flex: 1,
    top: 38,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: 280,
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

export default VideoCard;
