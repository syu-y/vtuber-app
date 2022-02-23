import { useState } from 'react';
import { VtuberInfo } from '../../data/vtuber-info-type';
import { VtuberCopntextType } from './vtuber-context-type';

/** VtuberInfoのコンテキスト定義 */
export const useVCtx = (): VtuberCopntextType => {
  const [vList, setVlist] = useState<VtuberInfo[]>([]);
  const updateVList = (list: VtuberInfo[]) => {
    setVlist(list);
  };

  return { vList, updateVList };
};
