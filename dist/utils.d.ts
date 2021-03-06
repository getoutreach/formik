export declare function isPromise(value: any): boolean;
export declare const isReactNative: boolean | '';
export declare function values<T>(obj: any): T[];
export declare function dlv(
  obj: any,
  key: string | string[],
  def?: any,
  p?: number
): any;
export declare function setDeep(path: string, value: any, obj: any): any;
export declare const isFunction: (obj: any) => boolean;
export declare const isObject: (obj: any) => boolean;
export declare const isInteger: (obj: any) => boolean;
export declare const isEmptyChildren: (children: any) => boolean;
