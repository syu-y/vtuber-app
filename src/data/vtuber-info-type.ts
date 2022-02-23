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
  startDate: string;
}

export class VtuberInfoConvert {
  public static toVtuberInfo(json: string): VtuberInfo {
    return JSON.parse(json);
  }

  public static vtuberInfoToJson(value: VtuberInfo): string {
    return JSON.stringify(value);
  }
}

export const createEmptyVtuberInfo = () => {
  const emptyVtuberInfo: VtuberInfo = {
    vtuberId: '',
    twitterInfo: {
      screen_name: '',
      name: '',
      originalIconUrl: '',
      description: '',
      id: '',
      iconUrl: '',
      url: '',
    },
    youtubeInfo: {
      icon: '',
      description: '',
      title: '',
      channelId: '',
      startDate: '',
    },
  };
  return emptyVtuberInfo;
};
