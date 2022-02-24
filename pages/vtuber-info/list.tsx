import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getVtuberInfoList } from '../../src/lib/api/get-vtuber-info-list';
import ListElement from '../../src/components/vtuber-Info/list-element';
import { useVtuberContext } from '../../src/context/vtuber-context/vtuber-context-provider';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  let vtuberInfoList = await getVtuberInfoList();
  vtuberInfoList = vtuberInfoList.sort(
    (a, b) => Number(a.vtuberId) - Number(b.vtuberId)
  );
  return {
    props: {
      vtuberInfoList,
    },
    /** キャッシュ秒数（ISR） */
    revalidate: 30,
  };
};

const VtuberInfoListPage: NextPage<Props> = ({ vtuberInfoList }) => {
  /** コンテキスト情報の更新 */
  const { vList, updateVList } = useVtuberContext();
  updateVList(vtuberInfoList);

  return (
    <>
      <h1 className="title">Vtuber List</h1>
      {vtuberInfoList.map((v) => {
        return (
          <ListElement
            key={
              v.vtuberId +
              '-' +
              v.youtubeInfo.channelId +
              '-' +
              v.twitterInfo.id
            }
            vtuberInfo={v}
          ></ListElement>
        );
      })}
      <h2>
        <Link href="/">
          <a>Go Home Page</a>
        </Link>
      </h2>
    </>
  );
};

export default VtuberInfoListPage;
