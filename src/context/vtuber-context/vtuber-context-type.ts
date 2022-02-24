import { VtuberInfo } from '../../data/vtuber-info-type';

/** VtuberInfo情報をページ間で共有するコンテキストType */
export type VtuberCopntextType = {
  vList: VtuberInfo[];
  updateVList: (vtuberInfoList: VtuberInfo[]) => void;
};
