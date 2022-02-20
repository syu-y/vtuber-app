import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getVtuberList } from '../../lib/api.vtuber-info';
import PageLayout from '../../src/components/pageLayout';
import Image from 'next/image';
import { URL_YOUTUBE_CHANNEL } from '../../src/app.const';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const vtuberList = await getVtuberList();
  return {
    props: {
      vtuberList
    },
    /** キャッシュ時間（ISR） */
    revalidate: 30,
  };
}

const VtuberListPage: NextPage<Props> = ({ vtuberList }) => {
  return (
    <PageLayout>
      <h1 className="title">Vtuber List</h1>
      <h2>
        <Link href="/">
          <a>Go Home Page</a>
        </Link>
      </h2>
        <ul>
          {
            vtuberList.map((v) => {
              return (
                <li key={v.vtuberId}>
                  {v.youtubeInfo.title}
                  <br />
                  <Image
                    priority
                    src={v.youtubeInfo.icon}
                    height={50}
                    width={50}
                    alt={v.youtubeInfo.title}
                  /><a href={ URL_YOUTUBE_CHANNEL + v.youtubeInfo.channelId}>YouTube</a><br /><a href={v.twitterInfo.url}>Twitter</a>
                </li>
            );})
          }
        </ul>
    </PageLayout>
  );
};

export default VtuberListPage;
