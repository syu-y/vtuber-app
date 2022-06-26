import { useState } from 'react';

import { MemberType } from '../../data/member-type';
import { MemberTypeContextType } from './member-type-context-type';

/** VtuberInfoのコンテキスト定義 */
export const useMemberCtx = (): MemberTypeContextType => {
  const [memberTypeList, setMemberTypelist] = useState<MemberType[]>([]);
  const updateMemberTypeList = (list: MemberType[]) => {
    setMemberTypelist(list);
  };

  return { memberTypeList, updateMemberTypeList };
};
