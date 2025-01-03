import { BaseYouTubeService } from './youtube.base';

export class YouTubeService extends BaseYouTubeService {
  private static instance: YouTubeService;

  private constructor() {
    super();
  }

  public static getInstance(): YouTubeService {
    if (!YouTubeService.instance) {
      YouTubeService.instance = new YouTubeService();
    }
    return YouTubeService.instance;
  }

  protected initializeClient(): void {}
}
