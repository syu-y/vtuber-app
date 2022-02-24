/** ページIDをVtuberInfoListの番号に変換 */
export const convertPageIdToListNum = (pageId: string | undefined) => {
  if (pageId) return Number(pageId) - 1;
  else throw new Error('PageId Error.');
};
