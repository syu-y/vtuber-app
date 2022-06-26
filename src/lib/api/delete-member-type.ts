import axios, { AxiosResponse } from 'axios';

const API_SUCCESS = 200;

export const deleteMemberType = async (memberTypeCd: string) => {
  const url = process.env.NEXT_PUBLIC_API_ENDPOINT + 'deleteMemberType';

  const headers = {
    'Content-Type': 'application/json',
  };

  /** MemberType削除 */
  const response: AxiosResponse = await axios.post(
    url,
    {
      memberTypeCd,
    },
    { headers: headers }
  );
  const { status } = response;

  /** 取得できなかった場合は空のリストを返却 */
  if (status !== API_SUCCESS) {
    throw new Error('Could not delete MemberType!');
  }
};
