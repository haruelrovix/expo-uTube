import React, { useState } from 'react';

import { Image, Pressable, StyleSheet } from 'react-native';

import { Video } from '../../types/youtube';
import VideoActionButtons from './VideoActionButtons';
import VideoInfo from './VideoInfo';
import VideoMenu from './VideoMenu';

interface VideoPopUpProps {
  video: Video;
  isHovered: boolean;
  isInfoVisible: boolean;
  setHoverInfo: (show: boolean) => void;
  setHoverImage: (show: boolean) => void;
}

const VideoPopUp = ({
  video,
  isHovered,
  isInfoVisible,
  setHoverInfo,
  setHoverImage,
}: VideoPopUpProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  if (!isHovered && !isInfoVisible) return null;

  const handleAddToQueue = () => {
    console.log('Added to queue:', video.snippet.title);
    setMenuVisible(false);
  };

  const handleShare = () => {
    console.log('Share:', video.snippet.title);
    setMenuVisible(false);
  };

  const handleWatchLater = () => {
    console.log('Watch later:', video.snippet.title);
  };

  const showHoverInfo = () => setHoverInfo(true);
  const closeHoverInfo = () => setHoverInfo(false);
  const closeMenu = () => setMenuVisible(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const onHoverIn = () => {
    showHoverInfo();
    setHoverImage(true);
  };

  const imageSource = { uri: video.snippet.thumbnails.high.url };

  return (
    <Pressable
      style={styles.container}
      onHoverIn={showHoverInfo}
      onHoverOut={closeHoverInfo}
      onPress={closeMenu}
    >
      <VideoInfo
        title={video.snippet.title}
        channelTitle={video.snippet.channelTitle}
        publishedAt={video.snippet.publishedAt}
        closeMenu={closeMenu}
        showHoverInfo={showHoverInfo}
      />

      <Pressable style={styles.thumbnailContainer} onHoverIn={onHoverIn}>
        <Image style={styles.thumbnail} source={imageSource} />

        <VideoMenu
          isAvailable={true}
          isMenuVisible={menuVisible}
          isPopUp={true}
          onToggle={toggleMenu}
          onAddToQueue={handleAddToQueue}
          onShare={handleShare}
        />

        <VideoActionButtons onWatchLater={handleWatchLater} onAddToQueue={handleAddToQueue} />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: -100,
    left: -40,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: '#FFFFFF',
  },
  thumbnailContainer: {
    flex: 1,
  },
  thumbnail: {
    flex: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

export default VideoPopUp;
