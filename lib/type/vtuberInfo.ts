export interface VtuberInfo {
  vtuberId: string;
  twitterInfo: TwitterInfo;
  youtubeInfo: YoutubeInfo;
}

export interface TwitterInfo {
  screen_name: string;
  name: string;
  originalIconUrl: string;
  description: string;
  id: string;
  iconUrl: string;
  url: string;
}

export interface YoutubeInfo {
  channelId: string;
  icon: string;
  description: string;
  title: string;
  startDate: Date;
}

export class VtuberInfoConvert {
  public static toVtuberInfo(json: string): VtuberInfo {
    return JSON.parse(json);
  }

  public static vtuberInfoToJson(value: VtuberInfo): string {
    return JSON.stringify(value);
  }
}
