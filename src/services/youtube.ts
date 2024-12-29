import axios from 'axios';
import { YouTubeResponse } from '../types/youtube';

const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_YOUTUBE_BASE_URL ?? '';

export const fetchVideos = async (
  pageParam: unknown,
  maxResults: number = 5,
): Promise<YouTubeResponse> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        maxResults,
        pageToken: pageParam as string | undefined,
        isDummy: true,
      },
      headers: {
        'x-api-key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
