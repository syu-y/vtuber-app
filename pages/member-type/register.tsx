import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { FormEvent, SyntheticEvent, useEffect } from 'react';

import ListElement from '../../src/components/member-type/list-element';
import { useMemberTypeContext } from '../../src/context/member-type/member-type-context-provider';
import { deleteMemberType } from '../../src/lib/api/delete-member-type';
import { getMemberTypeList } from '../../src/lib/api/get-member-type-list';
import { putMemberType } from '../../src/lib/api/put-member-type';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  let memberTypeList = await getMemberTypeList();
  memberTypeList = memberTypeList.sort(
    (a, b) => Number(a.memberTypeCd) - Number(b.memberTypeCd)
  );
  return {
    props: {
      memberTypeList,
    },
    /** キャッシュ秒数（ISR） */
    revalidate: 30,
  };
};

const MemberRegisterPage: NextPage<Props> = ({ memberTypeList }) => {

  useEffect(
    /** コンテキスト情報の更新 */
    () => updateMemberTypeList(memberTypeList),
    []
  );

  const { updateMemberTypeList } = useMemberTypeContext();

  /** MemberType登録
  * MemberTypeの登録を行う
  */
  const submitAction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // targetへのアクセスのためFormの要素を追加しておく
    const target = event.target as typeof event.target & {
      memberTypeName: { value: string };
    };

    // 型チェック実施/
    const memberTypeName = target.memberTypeName.value;

    // LambdaAPIで登録
    await putMemberType(memberTypeName);

    // クリア
    target.memberTypeName.value = '';

    // 一覧更新
    const memberTypeList = await getMemberTypeList();
    updateMemberTypeList(memberTypeList)
  }

  /** MemberType削除
  * MemberTypeの削除を行う
  */
  const deleteAction = async (event: SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();

    // targetへのアクセスのためFormの要素を追加しておく
    const target = event.target as typeof event.target & {
      value: string
    };

    // 型チェック実施
    const memberTypeCd = target.value;

    // LambdaAPIで登録
    await deleteMemberType(memberTypeCd);

  }

  return (
    <>
      <h1 className="title">Member Type Regiser</h1>
      <form onSubmit={submitAction}>
        <label htmlFor="memberTypeName">Member Type Name:</label>
        <input required type="text" id="memberTypeName" name="memberTypeName" />
        <button type="submit">Submit</button>
      </form>
      <h1 className="title">Member Type List</h1>

      {memberTypeList.map((m, idx) => {
        return (
          <>
            <input id="memberTypeCd" name="memberTypeCd" value={m.memberTypeCd} onClick={deleteAction} type="image" src="/images/icon/bold-close-icon.png" height="30" width="30" />
            <ListElement key={m.memberTypeCd} index={idx} memberType={m} />
          </>
        )
      })}
      <h2>
        <Link href="/">
          <a>Go Home Page</a>
        </Link>
      </h2>
    </>
  );
}

export default MemberRegisterPage;
