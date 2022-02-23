import { NextPage } from 'next';
import { createCtx } from '../../utils/create-context';
import { useVCtx } from './vtuber-context';
import { VtuberCopntextType } from './vtuber-context-type';

export const [useVtuberContext, SetVtuberProvider] =
  createCtx<VtuberCopntextType>();

type Props = {
  children?: React.ReactNode;
};

export const VtuberContextProvider: NextPage = ({ children }: Props) => {
  const vtuberContext = useVCtx();
  return (
    <SetVtuberProvider value={vtuberContext}>{children}</SetVtuberProvider>
  );
};
