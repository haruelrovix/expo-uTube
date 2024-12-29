import { ApisauceInstance, create } from 'apisauce';
import { YouTubeResponse } from '../types/youtube';

const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_YOUTUBE_BASE_URL ?? '';

export abstract class BaseYouTubeService {
  protected client: ApisauceInstance;

  constructor(baseURL: string = BASE_URL, apiKey: string = API_KEY) {
    this.client = create({
      baseURL,
      headers: {
        'x-api-key': apiKey,
      },
    });
    this.initializeClient();
  }

  protected abstract initializeClient(): void;

  async fetchVideos(
    pageParam: unknown,
    maxResults: number = 10
  ): Promise<YouTubeResponse> {
    try {
      const response = await this.client.get('', {
        maxResults,
        pageToken: pageParam as string | undefined,
        isDummy: true,
      });

      if (!response.ok || !response.data) {
        throw new Error('Failed to fetch videos');
      }

      return response.data as YouTubeResponse;
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw error;
    }
  }
}
