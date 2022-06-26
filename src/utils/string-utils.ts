/** 3桁コード変換
 * 3桁のコード（文字列）を数値に変換
 */
export const convert3DigitStringToNum = (str: string | undefined) => {
  if (str && 1 <= str.length && str.length <= 3) {
    return Number(str);
  } else throw new Error('Convert Error.');
};

/** 3桁コード変換
 * 数値を3桁のコード（文字列）に変換
 */
export const convertToNum3DigitString = (num: number | undefined) => {
  if (num && 1 <= num.toString().length && num.toString().length <= 3) {
    return ('000' + num).slice(-3);
  } else throw new Error('Convert Error.');
};
