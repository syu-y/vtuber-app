import config from './api.config.json';
import axios from 'axios';
import { VtuberInfo } from './type/vtuberInfo';
import { VtuberInfoConvert } from './type/vtuberInfo';

export const getVtuberList = async () => {
  const url = config.aws.dev.endpoint + config.aws.dev.apiname.getAllVtuberInfo;
  /** 開始ログ */
  console.log(`Start GET ${url}`);

  /** Vtuberの一覧を取得 */
  const response = await axios(url, { method: 'GET' });

  /** 取得できなかった場合は空のリストを返却 */
  if (!response.data) {
    console.log('データ取得失敗');
    return [];
  }

  /** 終了ログ */
  console.log(`End GET ${url}`);

  const items = JSON.parse(JSON.stringify(response.data.vtuberInfoList.Items));

  let itemList: VtuberInfo[] = new Array();
  for (let i = 0; i < items.length; i++) {
    itemList.push(
      VtuberInfoConvert.toVtuberInfo(
        VtuberInfoConvert.vtuberInfoToJson(items[i])
      )
    );
  }

  return itemList;
};
