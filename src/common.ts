/* Generic comparison associated types */

// interface IEqualsFunction<T>
export type Comparator<A> = (a: A, b: A) => boolean;
// interface ICompareFunction<T>
export type Comparison<A> = (a: A, b: A) => number;
export type Compare = <A>(test: Comparator<A>) => Comparison<A>;

export const compare: Compare = (test) => (a, b) =>
    test(a, b) ? -1
  : test(b, a) ?  1
  : 0;

//
export const isFunc = (f: any): boolean => (typeof f) === 'function'
export const isUndef = (o: any): boolean => (typeof o) === 'undefined'

export function isString(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object String]';
}

//
// function defaultCompare<T>(a: T, b: T): number
export const gt: Comparator<number> = (a, b) => b > a;
export const lt: Comparator<number> = (a, b) => b < a;

export const sortNumAsc  = compare(gt);
export const sortNumDesc = compare(lt);

// Need to limit Types to Nodes?
  //
export function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
  }
  return toreturn;
}
