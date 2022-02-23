import Image from 'next/image';
import Link from 'next/link';
import { URL_YOUTUBE_CHANNEL } from '../../app.const';
import { VtuberInfo } from '../../data/vtuber-info-type';
import Router from 'next/router';
import { createPath } from '../../utils/get-path';

interface Props {
  vtuberInfo: VtuberInfo;
}

const ListElement = ({ vtuberInfo }: Props) => {
  /** 詳細ページへのパス */
  const detailPagePath = createPath({
    pathname: 'vtuber',
    params: { pageId: vtuberInfo.vtuberId },
  });

  return (
    <>
      <h2>
        {vtuberInfo.vtuberId} : {vtuberInfo.youtubeInfo.title}
        <Image
          priority
          src={vtuberInfo.youtubeInfo.icon}
          height={50}
          width={50}
          alt={vtuberInfo.youtubeInfo.title}
        />
      </h2>
      <ul>
        <li key={vtuberInfo.youtubeInfo.channelId}>
          <Link href={URL_YOUTUBE_CHANNEL + vtuberInfo.youtubeInfo.channelId}>
            YouTube
          </Link>
        </li>
        <li key={vtuberInfo.twitterInfo.id}>
          <Link href={vtuberInfo.twitterInfo.url}>Twitter</Link>
        </li>
        <li key={vtuberInfo.vtuberId}>
          <Link href={detailPagePath}>Go Details Page</Link>
        </li>
      </ul>
    </>
  );
};

export default ListElement;
