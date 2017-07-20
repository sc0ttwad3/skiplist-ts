/* Generic comparison associated types */

// interface IEqualsFunction<T>
type Comparator<A> = (a: A, b: A) => boolean;
// interface ICompareFunction<T>
type Comparison<A> = (a: A, b: A) => number;
type Compare = <A>(test: Comparator<A>) => Comparison<A>;

const compare: Compare = (test) => (a, b) =>
    test(a, b) ? -1
  : test(b, a) ?  1
  : 0;

//
const isFunc = (f: any): boolean => (typeof f) === 'function'
const isUndef = (o: any): boolean => (typeof o) === 'undefined'

export function isString(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object String]';
}

//
// function defaultCompare<T>(a: T, b: T): number
const gt: Comparator<number> = (a, b) => b > a;
const lt: Comparator<number> = (a, b) => b < a;

const sortAsc  = compare(gt);
const sortDesc = compare(lt);
