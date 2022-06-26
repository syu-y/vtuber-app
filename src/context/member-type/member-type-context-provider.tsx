import { NextPage } from 'next';
import { ReactNode } from 'react';

import { createCtx } from '../../utils/create-context';
import { useMemberCtx } from './member-type-context';
import { MemberTypeContextType } from './member-type-context-type';

export const [useMemberTypeContext, SetMemberTypeProvider] =
  createCtx<MemberTypeContextType>();

type Props = {
  children?: ReactNode;
};

export const MemberTypeContextProvider: NextPage = ({ children }: Props) => {
  const memberTypeContext = useMemberCtx();
  return (
    <SetMemberTypeProvider value={memberTypeContext}>{children}</SetMemberTypeProvider>
  );
};
