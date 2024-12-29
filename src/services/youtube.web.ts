import Tron from '../utils/Reactotron.config.web';
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

  protected initializeClient(): void {
    // Setup Reactotron monitoring specific to web
    if (__DEV__) {
      this.client.addMonitor((response) => {
        if (response) {
          Tron.apisauce(response);
        }
      });
    }
  }
}
