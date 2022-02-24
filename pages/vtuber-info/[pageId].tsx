import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { URL_YOUTUBE_CHANNEL } from '../../src/app.const';
import { useVtuberContext } from '../../src/context/vtuber-context/vtuber-context-provider';
import { usePathParams } from '../../src/utils/get-path';
import { convertPageIdToListNum } from '../../src/utils/vtuber-utils';

const vtuberInfoDetailsPage: NextPage = () => {
  /** コンテキスト情報の取得 */
  const { vList } = useVtuberContext();
  // パスパラメータから値を取得
  const { pageId } = usePathParams<'vtuber', { name: string }>();
  const listNum = convertPageIdToListNum(pageId);

  return (
    <>
      <h1 className="title">Vtuber Details</h1>
      <h2>
        {vList[listNum].vtuberId} : {vList[listNum].youtubeInfo.title}
        <Image
          priority
          src={vList[listNum].youtubeInfo.icon}
          height={50}
          width={50}
          alt={vList[listNum].youtubeInfo.title}
        />
      </h2>
      <ul>
        <li>
          <Link
            href={URL_YOUTUBE_CHANNEL + vList[listNum].youtubeInfo.channelId}
          >
            YouTube
          </Link>
        </li>
        <li>
          <Link href={vList[listNum].twitterInfo.url}>Twitter</Link>
        </li>
      </ul>
    </>
  );
};

export default vtuberInfoDetailsPage;
