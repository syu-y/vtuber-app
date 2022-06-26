/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router';

import { Path, PathKeys, Paths } from '../path.const';

type WithoutSlash<T> = T extends `/${infer U}` ? U : never;
type Resource<T> = T extends `${infer U}/${infer S}` ? U | Resource<S> : T;

type DynamicOptionalArrayRoute<T> = T extends `[[...${infer U}]]` ? U : never;
type DynamicArrayRoute<T> = T extends `[...${infer U}]` ? U : never;
type DynamicRoute<T> = T extends `[[...${infer _U}]]`
  ? never
  : T extends `[...${infer _U}]`
  ? never
  : T extends `[${infer U}]`
  ? U
  : never;

type OptionalArrayParams<T> = DynamicOptionalArrayRoute<
  Resource<WithoutSlash<T>>
>;
type ArrayParams<T> = DynamicArrayRoute<Resource<WithoutSlash<T>>>;
type Params<T> = DynamicRoute<Resource<WithoutSlash<T>>>;

type OptionalArrayParamKeys<T extends Path> = OptionalArrayParams<T>;
type ArrayParamKeys<T extends Path> = ArrayParams<T>;
type ParamKeys<T extends Path> = Params<T>;

type PathParams<T extends PathKeys> = {
  pathname: T;
  params?: Partial<
    Record<OptionalArrayParamKeys<typeof Paths[T]>, (string | number)[]>
  > &
    Record<ArrayParamKeys<typeof Paths[T]>, (string | number)[]> &
    Record<ParamKeys<typeof Paths[T]>, string | number>;
};

type Args<T extends PathKeys> = ParamKeys<typeof Paths[T]> extends never
  ? PathParams<T>
  : Required<PathParams<T>>;

/** パスの生成 */
export const createPath = <T extends PathKeys>({
  pathname,
  params,
}: Args<T>) => {
  const path = Paths[pathname];

  if (params === undefined) {
    return path;
  }

  const directories = path.split('/');

  const replacedDirectories = directories.map((str) => {
    const matchOptionalArray = str.match(/\[\[\.\.\.(.*?)\]\]/);
    if (matchOptionalArray) {
      const key = matchOptionalArray[1] as ParamKeys<typeof path>;
      const param = params[key];
      return param ? param.join('/') : '';
    }

    const matchArray = str.match(/\[\.\.\.(.*?)\]/);
    if (matchArray) {
      const key = matchArray[1] as ParamKeys<typeof path>;
      return params[key].join('/');
    }

    const match = str.match(/\[(.*?)\]/);
    if (match) {
      const key = match[0];
      const trimmed = key.substring(1, key.length - 1) as ParamKeys<
        typeof path
      >;
      return params[trimmed];
    }

    return str;
  });

  return '/' + replacedDirectories.filter((d) => d !== '').join('/');
};

/** パスからパラメータを取得 */
export const usePathParams = <
  T extends PathKeys = PathKeys,
  Query extends Record<string, string | string[]> = {}
>() => {
  const router = useRouter();
  const params = router.query as Partial<
    Record<OptionalArrayParamKeys<typeof Paths[T]>, string[]>
  > &
    Record<ArrayParamKeys<typeof Paths[T]>, string[]> &
    Record<ParamKeys<typeof Paths[T]>, string> &
    Partial<Query>;

  return params;
};
