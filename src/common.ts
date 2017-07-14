export type ICompareFunction<T> = (a: T, b: T) => number;

export type IEqualsFunction<T> = (a: T, b: T) => boolean;

export type ILoopFunction<T> = (a: T) => boolean | void;

//
// utility function
//
const hasOwnProp = Object.prototype.hasOwnProperty;
export const has = function(obj: any, prop: any) {
    return hasOwnProp.call(obj, prop);
};

export function defaultCompare<T>(a: T, b: T): number {
  if (a < b) {
    return -1
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
}
