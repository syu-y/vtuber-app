import axios, { AxiosResponse } from 'axios';
import { VtuberInfo } from '../../data/vtuber-info-type';
import apiResponse from './type/api.resposne.get.vtuber-info-list.json';

type ApiResponse = typeof apiResponse;

const API_SUCCESS: number = 200;

export const getVtuberInfoList = async () => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT + 'getAllVtuberInfo';
  /** 開始ログ */
  console.log(`Start GET`);

  /** Vtuberの一覧を取得 */
  const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(
    url
  );
  const { data, status } = response;
  console.log('status: ' + status);

  /** 取得できなかった場合は空のリストを返却 */
  if (!data || status !== API_SUCCESS) {
    console.log('Can`t get data ');
    return [];
  }

  /** 終了ログ */
  console.log(`End GET`);

  /** 型名をつけて返却 */
  const vtuberInfoLiat: VtuberInfo[] = data.vtuberInfoList.Items;

  return vtuberInfoLiat;
};
