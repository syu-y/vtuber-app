import { createContext, useContext } from 'react';

/** コンテキストを生成 */
export function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('Context Check Error');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}
