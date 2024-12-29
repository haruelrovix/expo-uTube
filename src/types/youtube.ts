export interface Video {
  id: {
    videoId: string;
    kind?: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
    channelTitle: string;
    publishedAt: string;
    channelId?: string;
    liveBroadcastContent?: string;
    publishTime?: string;
  };
  kind?: string;
  etag?: string;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeResponse {
  items: Video[];
  nextPageToken?: string;
  kind?: string;
  etag: string;
  regionCode?: string;
  pageInfo?: PageInfo;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
