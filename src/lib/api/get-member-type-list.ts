import axios, { AxiosResponse } from 'axios';

import { MemberType } from '../../data/member-type';
import apiResponse from './type/api.resposne.get.member-type-list.json';

type ApiResponse = typeof apiResponse;

const API_SUCCESS = 200;

export const getMemberTypeList = async () => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT + 'getMemberTypes';

  /** Vtuberの一覧を取得 */
  const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(
    url
  );
  const { data, status } = response;

  /** 取得できなかった場合は空のリストを返却 */
  if (!data || status !== API_SUCCESS) {
    return [];
  }

  /** 型名をつけて返却 */
  const memberTypeList: MemberType[] = data.memberTypes.Items;

  return memberTypeList;
};
