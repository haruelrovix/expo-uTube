import React from 'react';

import ErrorState from '../components/VideoList/ErrorState';
import LoadingState from '../components/VideoList/LoadingState';
import VideoListContainer from '../components/VideoList/VideoListContainer';
import { useVideos } from '../hooks/useVideos';

const VideoList = () => {
  const { isLoading, isError, error } = useVideos();

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState error={error} />;

  return <VideoListContainer />;
};

export default VideoList;
