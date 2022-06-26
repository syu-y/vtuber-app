import { MemberType } from '../../data/member-type';

/** MemberTypeをページ間で共有するコンテキストType */
export type MemberTypeContextType = {
  memberTypeList: MemberType[];
  updateMemberTypeList: (memberTypeList: MemberType[]) => void;
};
